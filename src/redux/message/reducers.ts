import { merge } from 'lodash';
import { createReducers } from '@lib/redux';
import { IReduxAction } from 'src/interfaces';
import {
  getConversations,
  getConversationsSuccess,
  getConversationsFail,
  searchConversations,
  searchConversationsSuccess,
  searchConversationsFail,
  setActiveConversationSuccess,
  fetchingMessage,
  loadMessagesSuccess,
  sendMessage,
  sendMessageSuccess,
  sendMessageFail,
  getConversationDetailSuccess,
  receiveMessageSuccess,
  readMessages,
  sentFileSuccess,
  loadMoreMessagesSuccess,
  deactiveConversation,
  resetMessageState,
  updateLastMessage,
  countNotReadMessage
} from './actions';

const initialConversationState = {
  list: {
    requesting: false,
    error: null,
    data: [],
    total: 0,
    success: false
  },
  mapping: {},
  activeConversation: {}
};

const initialMessageState = {
  // conversationId => { fetching: boolean, items: [] }
  conversationMap: {},
  sendMessage: {},
  receiveMessage: {},
  totalNotReadMessage: 0
};

const conversationReducer = [
  {
    on: resetMessageState,
    reducer(state: any) {
      let { list, mapping, activeConversation } = state;
      list = {
        requesting: false,
        error: null,
        data: [],
        total: 0,
        success: false
      };
      mapping = {};
      activeConversation = {};
      return {
        ...state,
        list,
        mapping,
        activeConversation
      };
    }
  },
  {
    on: getConversations,
    reducer(state: any) {
      const nextState = { ...state };
      nextState.list.requesting = true;
      return {
        ...nextState
      };
    }
  },
  {
    on: getConversationsSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      const { list, mapping } = nextState;
      const { data: items, total } = data.payload;
      const Ids = items.map((c) => c._id);
      list.data = list.data.concat(Ids);
      list.total = total;
      list.success = true;
      list.requesting = false;
      list.error = false;
      items.forEach((c) => {
        mapping[c._id] = c;
      });
      return {
        ...nextState
      };
    }
  },
  {
    on: getConversationsFail,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      return {
        ...nextState,
        list: {
          requesting: false,
          error: data.payload,
          data: [],
          total: 0,
          success: false
        },
        mapping: {},
        activeConversation: {}
      };
    }
  },
  {
    on: searchConversations,
    reducer(state: any) {
      const nextState = { ...state };
      return {
        ...nextState,
        list: {
          requesting: true,
          error: null,
          data: [],
          total: 0,
          success: false
        },
        mapping: {},
        activeConversation: {}
      };
    }
  },
  {
    on: searchConversationsSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      const { list, mapping } = nextState;
      const { data: items, total } = data.payload;
      const Ids = items.map((c) => c._id);
      list.data = Ids;
      list.total = total;
      list.success = true;
      list.requesting = false;
      list.error = false;
      items.forEach((c) => {
        mapping[c._id] = c;
      });
      return {
        ...nextState
      };
    }
  },
  {
    on: searchConversationsFail,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      return {
        ...nextState,
        list: {
          requesting: false,
          error: data.payload,
          data: [],
          total: 0,
          success: false
        },
        mapping: {},
        activeConversation: {}
      };
    }
  },
  {
    on: setActiveConversationSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const conversation = data.payload;
      const list = state.list.data;
      const { mapping } = state;
      const check = list.find((c) => c === conversation._id);
      if (!check) {
        list.unshift(conversation._id);
        mapping[conversation._id] = conversation;
      }
      return {
        ...state,
        activeConversation: conversation
      };
    }
  },
  {
    on: getConversationDetailSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const { list, mapping } = state;
      const conversation = data.payload;
      if (!list.data.includes(conversation._id)) {
        list.data.unshift(conversation._id);
        mapping[conversation._id] = conversation;
      }

      return {
        ...state
      };
    }
  },
  {
    on: readMessages,
    reducer(state: any, data: IReduxAction<any>) {
      const conversationId = data.payload;
      const { mapping } = state;
      mapping[conversationId].totalNotSeenMessages = 0;
      return {
        ...state
      };
    }
  },
  {
    on: deactiveConversation,
    reducer(state: any) {
      const nextState = { ...state };
      nextState.activeConversation = {};
      return {
        ...nextState
      };
    }
  },
  {
    on: updateLastMessage,
    reducer(state, action: IReduxAction<any>) {
      const { conversationId, lastMessage } = action.payload;
      const { mapping } = state;
      if (mapping[conversationId]) {
        mapping[conversationId].lastMessage = lastMessage;
        mapping[conversationId].lastMessageCreatedAt = new Date();
        mapping[conversationId].totalNotSeenMessages = 0;
      }
      return {
        ...state
      };
    }
  }
];

const messageReducer = [
  {
    on: fetchingMessage,
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
    on: loadMessagesSuccess,
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
    on: loadMoreMessagesSuccess,
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
    on: sendMessage,
    reducer(state: any) {
      return {
        ...state,
        sendMessage: {
          sending: true
        }
      };
    }
  },
  {
    on: sendMessageSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      if (!nextState.conversationMap[data.payload.conversationId] || !nextState.conversationMap[data.payload.conversationId].items) {
        nextState.conversationMap[data.payload.conversationId].items = [];
      }
      nextState.conversationMap[data.payload.conversationId].items.push(
        data.payload
      );
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
    on: sendMessageFail,
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
    on: receiveMessageSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      if (!nextState.conversationMap[data.payload.conversationId]) {
        return { ...nextState };
      }
      nextState.conversationMap[data.payload.conversationId].items.push(
        data.payload
      );
      return {
        ...nextState,
        receiveMessage: data.payload
      };
    }
  },
  {
    on: sentFileSuccess,
    reducer(state: any, data: IReduxAction<any>) {
      const nextState = { ...state };
      if (!nextState.conversationMap[data.payload.conversationId] || !nextState.conversationMap[data.payload.conversationId].items) {
        nextState.conversationMap[data.payload.conversationId].items = [];
      }
      nextState.conversationMap[data.payload.conversationId].items.push(
        data.payload
      );
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
    on: countNotReadMessage,
    reducer(state: any, action: IReduxAction<any>) {
      return {
        ...state,
        totalNotReadMessage: action.payload
      };
    }
  }
];

export default merge(
  {},
  createReducers(
    'conversation',
    [conversationReducer],
    initialConversationState
  ),
  createReducers('message', [messageReducer], initialMessageState)
);
