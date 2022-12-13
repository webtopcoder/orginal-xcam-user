import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'remote-redux-devtools';
import storeHolder from '@lib/storeHolder';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const bindMiddleware = (middleware: any) => applyMiddleware(...middleware);

/**
 * const composeEnhancers = composeWithDevTools({
 * realtime: true,
 * name: 'xcams user',
 * hostname: 'localhost',
 * port: 8000 // the port your remotedev server is running at
 * });
*/

function configureStore(initialState: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware])) as any;
  /**
   * redux dev tool
   * const store = createStore(rootReducer, initialState, composeEnhancers(bindMiddleware([sagaMiddleware]))) as any;
   */

  store.sagaTask = sagaMiddleware.run(rootSaga);

  storeHolder.setStore(store);

  return store;
}

export default configureStore;
