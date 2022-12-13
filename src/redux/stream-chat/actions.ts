import { createAction, createAsyncAction } from '@lib/redux';

export const {
  getStreamConversation,
  getStreamConversationSuccess,
  getStreamConversationFail
} = createAsyncAction('getStreamConversation', 'GET_STREAM_CONVERSATION');

export const {
  sendStreamMessage,
  sendStreamMessageSuccess,
  sendStreamMessageFail
} = createAsyncAction('sendStreamMessage', 'SEND_STREAM_MESSAGE');

export const {
  receiveStreamMessageSuccess
} = createAsyncAction('receiveStreamMessageSuccess', 'RECEIVE_STREAM_MESSAGE_SUCCESS');

export const {
  loadStreamMessages,
  loadStreamMessagesSuccess,
  loadStreamMessagesFail
} = createAsyncAction('loadStreamMessages', 'LOAD_STREAM_MESSAGES');

export const {
  loadMoreStreamMessages,
  loadMoreStreamMessagesSuccess,
  loadMoreStreamMessagesFail
} = createAsyncAction('loadMoreStreamMessages', 'LOAD_MORE_STREAM_MESSAGES');

export const fetchingStreamMessage = createAction('fetchingStreamMessage');

export const resetStreamMessage = createAction('resetStreamMessage');
export const resetAllStreamMessage = createAction('resetAllStreamMessage');
export const resetStreamConversation = createAction('RESET_STREAM_CONVERSATION');

export const {
  deleteMessage,
  deleteMessageSuccess,
  deleteMessageFail
} = createAsyncAction('deleteMessage', 'DELETE_MESSAGE');
