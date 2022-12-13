/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import {
  reduce, isArray, isEmpty, flatten
} from 'lodash';
import { createSelector } from 'reselect';
import { takeLatest, delay } from 'redux-saga/effects';
import {
  createAction as ReduxCreateAction,
  handleActions as handleReduxActions,
  Action
} from 'redux-actions';

export type ActionFunction1<T1, R> = (t1?: T1) => R;

export interface ActionFunction<Payload>
  extends ActionFunction1<Payload, Action<Payload>> {
  is: (type: string) => boolean;
}

function createAction<Payload = any>(type: string): ActionFunction<Payload> {
  const action = ReduxCreateAction<Payload>(type) as ActionFunction<Payload>;
  action.is = (aType: string) => action.toString() === aType;
  return action;
}

/* tslint:disable-next-line */
function createAsyncAction(action: string, type: string): any {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions<
  ActionData = any,
  SuccessData = any,
  ErrorData = Error
>(
  type: string
): [
  ActionFunction<ActionData>,
  ActionFunction<SuccessData>,
  ActionFunction<ErrorData>
] {
  return [
    createAction<ActionData>(type),
    createAction<SuccessData>(`${type}_SUCCESS`),
    createAction<ErrorData>(`${type}_FAIL`)
  ];
}

/* tslint:disable */
function handleActions(actions: any, initialState: any) {
  return handleReduxActions(
    reduce(
      actions,
      (reducer: any, handler, action) => {
        reducer[action] = (state: any, act: any) => handler(state.set('action', action), act);
        return reducer;
      },
      {}
    ),
    initialState
  );
}

function createReducers(
  stateContext: string,
  reducers: any[],
  initialState: any,
  preventResetting: boolean = false
): any {
  return {
    [stateContext]: handleReduxActions(
      reduce(
        flatten(reducers),
        (reducer: any, action: any) => {
          if (isArray(action.on)) {
            action.on.forEach((act: any) => {
              reducer[act] = action.reducer;
            });
          } else reducer[action.on] = action.reducer;
          return reducer;
        },
        preventResetting
          ? {}
          : {
            APP_STATE_RESET: () => initialState
          }
      ),
      initialState
    )
  };
}

export function createSagas(sagas: any[]): any[] {
  return flatten(sagas).map((saga: any) => {
    const { on, effect = takeLatest, worker } = saga;
    return function* () {
      yield effect(on, function* (action: any) {
        yield delay(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context: string, keys: any[] = []): any {
  const stateSelector = (state: any) => state[context];

  if (isEmpty(keys)) return stateSelector;

  return keys.map((key: any) => (state: any) => (isArray(key)
    ? stateSelector(state).getIn(key)
    : stateSelector(state).get(key)));
}

function createSelectors(context: string, keys: string[]): any {
  const stateSelector = (state: any) => state[context];

  return reduce(
    keys,
    (selectors: any, key) => {
      selectors[`${key}Selector`] = (state: any) => stateSelector(state).get(key);
      return selectors;
    },
    {}
  );
}

function createJSSelectors(context: string, keys: string[]): any {
  const stateSelector = (state: any) => state[context];

  return reduce(
    keys,
    (selectors: any, key) => {
      selectors[`${key}Selector`] = (state: any) => stateSelector(state)[key];
      return selectors;
    },
    {}
  );
}

export {
  createAction,
  createAsyncAction,
  createAsyncActions,
  createSelectorsA,
  handleActions,
  createReducers,
  createSelectors,
  createSelector,
  createJSSelectors
};
