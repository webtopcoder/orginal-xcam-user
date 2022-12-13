import nextReduxWrapper from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import store from './store';

const withReduxSaga = (BaseComponent: any) => nextReduxWrapper(store as any)(nextReduxSaga(BaseComponent));

export default withReduxSaga;
