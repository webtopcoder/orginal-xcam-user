import { Store as RDStore } from 'redux';

export type Store = RDStore<{}>;

let store: Store | null = null;

export default {
  getStore: () => store,
  setStore: (s: Store) => {
    store = s;
  }
};
