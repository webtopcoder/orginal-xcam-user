// import Routes from 'next-routes';
const routes = require('next-routes');

/**
 * routes.add([name], pattern = /name, page = name)
   routes.add(object)
 */

export default routes()
  .add('login', '/auth/login', '/auth/login/user')
  .add('register', '/auth/register', '/auth/register/user')
  .add('studio-login', '/auth/login/studio', '/studio/login')

  /**
   * Performers
   */
  .add('performer-category', '/performer-category/:slug', '/performer-category')
  .add('performer-tag', '/tag/:tags', '/tag')
  .add(
    'performer-update-product',
    '/account/performer/products/:id/update',
    '/account/performer/products/update'
  )
  .add(
    'performer-update-payout-request',
    '/account/performer/payout-requests/:id/update',
    '/account/performer/payout-requests/update'
  )
  .add(
    'studio-update-payout-request',
    '/studio/payout-requests/:id/update',
    '/studio/payout-requests/update'
  )
  .add(
    'performer-update-video',
    '/account/performer/videos/:id/update',
    '/account/performer/videos/update'
  )
  .add(
    'performer-update-photo',
    '/account/performer/photos/:id/update',
    '/account/performer/photos/update'
  )
  .add(
    'performer-update-gallery',
    '/account/performer/galleries/:id/update',
    '/account/performer/galleries/update'
  )
  .add('performer-profile', '/profile/:username', '/stream')
  // .add('performer-profile', '/profile/:username', '/profile')
  .add('video-detail', '/video/:id', '/videos/detail')
  .add('gallery-detail', '/photos/:id', '/photos')
  .add('page', '/page/:id', '/page')
  .add('all-models', '/all-models', '/performer-category')
  .add(
    'user-private-chat',
    '/stream/privatechat/:username',
    '/stream/privatechat'
  )
  .add(
    'performer-private-chat',
    '/live/privatechat/:id',
    '/live/privatechat'
  )
  .add('user-group-chat', '/stream/groupchat/:username', '/stream/groupchat')
  .add(
    'webrtc-user-group-chat',
    '/stream/webrtc/groupchat/:username',
    '/stream/webrtc/groupchat'
  )
  .add(
    'webrtc-user-private-chat',
    '/stream/webrtc/privatechat/:username',
    '/stream/webrtc/privatechat'
  )
  .add(
    'webrtc-model-private-chat',
    '/live/webrtc/privatechat/:id',
    '/live/webrtc/privatechat'
  )
  .add(
    'webrtc-model-groupchat',
    '/live/webrtc/groupchat',
    '/live/webrtc/groupchat'
  );
