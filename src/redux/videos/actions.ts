import { createAsyncActions, createAction } from '@lib/redux';

export const [
  getPerformersVideos,
  getPerformersVideosSuccess,
  getPerformersVideosFail
] = createAsyncActions('GET_PERFOMER_VIDEOS');
export const gettingPerformerVideos = createAction('GETTING_PERFORMER_VIDEOS');
export const addPerformerVideos = createAction('ADD_PERFORMER_VIDEOS');
