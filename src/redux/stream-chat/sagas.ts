/* eslint-disable no-console */
import { flatten } from 'lodash';
import { put, select } from 'redux-saga/effects';
import { createSagas } from '@lib/redux';
import { messageService } from '@services/message.service';
import { IReduxAction } from 'src/interfaces';
import { message } from 'antd';
import {
  getStreamConversation,
  getStreamConversationSuccess,
  fetchingStreamMessage,
  loadMoreStreamMessages,
  loadMoreStreamMessagesSuccess,
  loadStreamMessages,
  loadStreamMessagesSuccess,
  sendStreamMessage,
  sendStreamMessageSuccess,
  deleteMessage,
  deleteMessageSuccess
} from './actions';

const streamMessageSagas = [
  {
    on: getStreamConversation,
    * worker(data: IReduxAction<Record<string, any>>) {
      try {
        const { conversation } = data.payload;
        const { type } = conversation;
        const resp = type === 'stream_public'
          ? yield messageService.findPublicConversationPerformer(
            conversation.performerId
          )
          : yield messageService.getConversationByStreamId(
            conversation.streamId
          );
        if (resp && resp.data) {
          yield put(getStreamConversationSuccess({ data: resp.data }));
          yield put(
            loadStreamMessages({
              conversationId: resp.data._id,
              limit: 25,
              offset: 0,
              type
            })
          );
        }
      } catch (e) {
        // load error
        console.log('err-get-conversation', e);
      }
    }
  },
  {
    on: loadStreamMessages,
    * worker(data: IReduxAction<Record<string, any>>) {
      try {
        const {
          conversationId, offset, limit, type
        } = data.payload;
        yield put(fetchingStreamMessage({ conversationId }));
        const resp = type === 'stream_public'
          ? yield messageService.getPublicMessages(conversationId, {
            sort: 'desc',
            offset,
            limit
          })
          : yield messageService.getMessages(conversationId, {
            sort: 'desc',
            offset,
            limit
          });
        yield put(
          loadStreamMessagesSuccess({
            conversationId,
            items: resp.data.data,
            total: resp.data.total
          })
        );
      } catch (e) {
        // load error
        console.log('err', e);
      }
    }
  },
  {
    on: loadMoreStreamMessages,
    * worker(data: IReduxAction<Record<string, any>>) {
      try {
        const messageMap = select(
          (state) => state.streamMessage.messages
        ) as any;
        const {
          conversationId, offset, limit, type
        } = data.payload;
        if (messageMap && messageMap.fetching) {
          return;
        }

        yield put(fetchingStreamMessage({ conversationId }));
        const resp = type === 'stream_public'
          ? yield messageService.getPublicMessages(conversationId, {
            sort: 'desc',
            offset,
            limit
          })
          : yield messageService.getMessages(conversationId, {
            sort: 'desc',
            offset,
            limit
          });
        yield put(
          loadMoreStreamMessagesSuccess({
            conversationId,
            items: resp.data.data,
            total: resp.data.total
          })
        );
      } catch (e) {
        // load error
        message.error('Error occured, please try again later');
        console.log('err', e);
      }
    }
  },
  {
    on: sendStreamMessage,
    * worker(req: IReduxAction<any>) {
      try {
        const { conversationId, data, type } = req.payload;
        const resp = type === 'stream_public'
          ? yield messageService.sendPublicStreamMessage(conversationId, data)
          : yield messageService.sendStreamMessage(conversationId, data);

        yield put(sendStreamMessageSuccess(resp.data));
      } catch (e) {
        yield put(sendStreamMessageSuccess(e));
      }
    }
  },
  {
    on: deleteMessage,
    * worker(req: IReduxAction<any>) {
      try {
        const { messageId } = req.payload;
        const resp = yield messageService.deleteMessage(messageId);
        yield put(deleteMessageSuccess(resp.data));
      } catch (e) {
        yield put(deleteMessageSuccess(e));
      }
    }
  }
];

export default flatten([createSagas(streamMessageSagas)]);
