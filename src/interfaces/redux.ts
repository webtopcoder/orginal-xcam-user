export interface IReduxAction<T> {
  type: string;
  payload: T;
}

export interface IReducerFieldUpdate<T> {
  field: string;
  data: T;
}
