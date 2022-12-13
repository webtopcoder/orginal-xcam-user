import { merge } from 'lodash';
import { combineReducers } from 'redux';

// load reducer here
import settings from './settings/reducers';
import ui from './ui/reducers';
import user from './user/reducers';
import auth from './auth/reducers';
import performer from './performer/reducers';
import message from './message/reducers';
import streamMessage from './stream-chat/reducers';
import streaming from './streaming/reducers';
import videos from './videos/reducers';
import photos from './photos/reducers';
import products from './products/reducers';
import galleries from './galleries/reducers';
import studio from './studio/reducers';
import banner from './banner/reducers';

const reducers = merge(
  settings,
  ui,
  user,
  auth,
  performer,
  message,
  streamMessage,
  streaming,
  videos,
  photos,
  products,
  galleries,
  studio,
  banner
);

export default combineReducers(reducers);
