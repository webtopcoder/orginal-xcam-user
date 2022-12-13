import { merge, findIndex } from 'lodash';
import { createReducers } from '@lib/redux';
import { IReduxAction } from 'src/interfaces';
import {
  getStreamConversation,
  getStreamConversationSuccess,
  fetchingStreamMessage,
  sendStreamMessage,
  sendStreamMessageSuccess,
  sendStreamMessageFail,
  receiveStreamMessageSuccess,
  loadMoreStreamMessagesSuccess,
  loadStreamMessagesSuccess,
  resetStreamMessage,
  resetAllStreamMessage,
  deleteMessageSuccess,
  resetStreamConversation
} from './actions';

const initialMessageState = {
  activeConversation: {
  },
  sendMessage: {
    sending: false
  },
  receiveMessage: {},
  conversationMap: {}
};

const streamMessageReducer = [
  {
    on: getStreamConversation,
    reducer(state: any) {
      return {
        ...state,
        activeConversation: { ...state.activeConversation, fetching: true }
      };
    }
  },
  {
    on: getStreamConversationSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      return {
        ...state,
        activeConversation: {
          fetching: false,
          data: data.payload.data
        }
      };
    }
  },
  {
    on: fetchingStreamMessage,
    reducer(state: any, data: IReduxAction<any>) {
      const { conversationMap } = state;
      const { conversationId } = data.payload;
      conversationMap[conversationId] = {
        ...conversationMap[conversationId],
        fetching: true
      };
      return { ...state };
    }
  },
  {
    on: loadStreamMessagesSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const { conversationMap } = state;
      const { conversationId, items, total } = data.payload;
      conversationMap[conversationId] = {
        items: [...items.reverse()],
        total,
        fetching: false
      };
      return { ...state };
    }
  },
  {
    on: loadMoreStreamMessagesSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const { conversationMap } = state;
      const { conversationId, items, total } = data.payload;
      conversationMap[conversationId] = {
        items: [
          ...items.reverse(),
          ...conversationMap[conversationId].items || []
        ],
        total,
        fetching: false
      };
      return { ...state };
    }
  },
  {
    on: sendStreamMessage,
    reducer(state: any) {
      return {
        ...state,
        sendMessage: {
          sending: true,
          success: false,
          data: null
        }
      };
    }
  },
  {
    on: sendStreamMessageSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      return {
        ...nextState,
        sendMessage: {
          sending: false,
          success: true,
          data: data.payload
        }
      };
    }
  },
  {
    on: sendStreamMessageFail,
    reducer(state: any, data: IReduxAction<any>) {
      return {
        ...state,
        sendMessage: {
          sending: false,
          success: false,
          error: data.payload
        }
      };
    }
  },
  {
    on: receiveStreamMessageSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      const { conversationId } = data.payload;
      if (!nextState.conversationMap[conversationId] || !nextState.conversationMap[conversationId].items) {
        nextState.conversationMap[conversationId] = {
          items: []
        };
      }

      nextState.conversationMap[conversationId].items = [...nextState.conversationMap[conversationId].items, data.payload];
      return {
        ...nextState,
        receiveMessage: data.payload
      };
    }
  },
  {
    on: resetStreamConversation,
    reducer(state) {
      return {
        ...state,
        activeConversation: {}
      };
    }
  },
  {
    on: resetStreamMessage,
    reducer(state: any) {
      const nextState = { ...state };
      return {
        ...nextState,
        sendMessage: {
          sending: false
        },
        receiveMessage: {},
        conversationMap: {}
      };
    }
  },
  {
    on: resetAllStreamMessage,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      const { conversationId } = data.payload;
      nextState.conversationMap[conversationId] = {
        items: []
      };
      return {
        ...nextState
      };
    }
  },
  {
    on: deleteMessageSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      const { conversationId, _id } = data.payload;
      const i = findIndex(nextState.conversationMap[conversationId].items, (item: any) => item && item._id === _id);
      if (nextState.conversationMap[conversationId].items && nextState.conversationMap[conversationId].items[i]) {
        nextState.conversationMap[conversationId].items[i].text = 'Message deleted';
        nextState.conversationMap[conversationId].items[i].isDeleted = true;
      }
      return {
        ...nextState
      };
    }
  }
];

export default merge(
  {},
  createReducers('streamMessage', [streamMessageReducer], initialMessageState)
);
