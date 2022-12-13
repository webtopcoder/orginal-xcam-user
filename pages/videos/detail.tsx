/* eslint-disable no-return-assign */
import { Button, message, Alert } from 'antd';
import {
  HourglassOutlined,
  ClockCircleOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import './index.less';
import { updateCurrentUserBalance } from '@redux/user/actions';
import { videoService, purchaseItemService } from 'src/services';
import {
  IVideo, IUser, IPerformer, IUIConfig
} from 'src/interfaces';
import { connect } from 'react-redux';
import Popup from 'src/components/common/base/popup';
import {
  capitalizeFirstLetter,
  getResponseError,
  formatDate,
  formatDuration
} from 'src/lib';
import nextCookie from 'next-cookies';
import Error from 'pages/_error';
import Loader from '@components/common/base/loader';
import NumberFormat from '@components/common/layout/numberformat';
import Router from 'next/router';
import ProfileCard from '@components/performer/profile-card';

interface IProps {
  ui: IUIConfig;
  isBrowser: boolean;
  loggedIn: boolean;
  query: any;
  data: IVideo;
  updateCurrentUserBalance: Function;
  currentUser: IUser;
  currentPerformer: IPerformer;
}
interface IStates {
  video: IVideo;
  loading: boolean;
  success: boolean;
}

class VideoDetailPage extends PureComponent<IProps, IStates> {
  static authenticate = false;

  static layout = 'public';

  private popupRef;

  static async getInitialProps({ ctx }) {
    try {
      const { query } = ctx;
      if (query.data) return { data: JSON.parse(query.data), isBrowser: process.browser };
      if (query.id) {
        const { token } = nextCookie(ctx);
        const headers = { Authorization: token };
        const resp = await videoService.userFindVideoById(query.id, headers);
        return {
          data: resp.data,
          isBrowser: process.browser
        };
      }
    } catch {
      return {};
    }
    return {};
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      video: null,
      loading: true,
      success: false
    };
  }

  componentDidMount() {
    const { data, isBrowser } = this.props;
    isBrowser
      ? this.getVideoDetail()
      : this.setState({ video: data, success: true, loading: false });
  }

  async onOk() {
    const {
      currentUser,
      data,
      updateCurrentUserBalance: dispatchUpdateCurrentUserBalance
    } = this.props;
    try {
      if (!currentUser || !currentUser._id) {
        message.error('Please login to buy this video!');
        return Router.push('/auth/login');
      }

      await purchaseItemService.purchaseVideo(data._id);
      this.popupRef && this.popupRef.setVisible(false);
      this.getVideoDetail();
      const value = -1 * data.token;
      dispatchUpdateCurrentUserBalance(value);
    } catch (error) {
      this.responseError(error);
    }
    return undefined;
  }

  async getVideoDetail() {
    const { data } = this.props;
    this.setState({ success: false, loading: true });

    try {
      const resp = await videoService.userFindVideoById(data._id);
      this.setState({ video: resp.data, success: true });
    } catch (error) {
      this.responseError(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  purchase() {
    const { loggedIn } = this.props;
    if (!loggedIn) return message.error('Please login to buy this video!');

    this.popupRef && this.popupRef.setVisible(true);
    return undefined;
  }

  download() {
    const { video } = this.state;
    if (!video) return;

    if (video.isBought || !video.isSaleVideo) {
      const e = document.createElement('a');
      e.href = video.video.url;
      e.target = '_blank';
      document.body.appendChild(e);
      e.click();
    }
  }

  async responseError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  render() {
    const { video, success, loading } = this.state;
    const { data, ui, loggedIn } = this.props;
    if (!data) return <Error statusCode={404} />;

    const dataSource: { title: string; description: any }[] = [
      { title: 'Posted by:', description: data?.performer?.username },
      { title: 'Added on:', description: formatDate(data.createdAt) },
      { title: 'Duration:', description: formatDuration(data.video?.duration) }
    ];
    data.isSaleVideo
      && dataSource.push({
        title: 'Price: ',
        description: <NumberFormat value={data.token} suffix=" Tokens" />
      });
    return (
      <>
        <Head>
          <title>{video && video.title ? video.title : 'Video'}</title>
          <meta name="keywords" content={video && video.description} />
          <meta name="description" content={video && video.description} />
          {/* OG tags */}
          <meta
            property="og:title"
            content={`${ui?.siteName} | ${video?.title || 'Video'}`}
            key="title"
          />
          <meta property="og:image" content={video && video.thumbnail} />
          <meta property="og:keywords" content={video && video.description} />
          <meta
            property="og:description"
            content={video && video.description}
          />
        </Head>
        <>
          <Popup
            ref={(ref) => (this.popupRef = ref)}
            title={`Buy Video ${data?.title}`}
            content={(
              <div>
                <strong>Available high quality Video</strong>
                <h3>
                  <NumberFormat
                    value={data.token}
                    prefix={`Buy ${capitalizeFirstLetter(
                      data?.title || ''
                    )} For `}
                    suffix=" Tokens"
                  />
                </h3>
              </div>
            )}
            onOk={this.onOk.bind(this)}
          />
          <div className="video-detail-page">
            {!loading && success ? (
              <>
                <div className="video-header">
                  <div className="vid-title">{video?.title}</div>
                  <div className="vid-duration">
                    <HourglassOutlined />
                    &nbsp;
                    {formatDuration(video?.video?.duration || 0)}
                  </div>
                  <div className="vid-duration">
                    <ClockCircleOutlined />
                    &nbsp;
                    {formatDate(video?.createdAt)}
                  </div>
                </div>
                <div className="video-player">
                  {(!video.isSaleVideo || video.isBought) && (
                    <video
                      src={video?.video?.url}
                      controls
                      poster={video?.thumbnail}
                    />
                  )}
                  {video.isSaleVideo && !video.isBought && video.trailer && (
                    <>
                      <video
                        src={video?.trailer.url}
                        controls
                        poster={video?.thumbnail}
                      />
                      <p style={{ margin: '10px', textAlign: 'center' }}>
                        You&apos;re watching teaser video
                      </p>
                    </>
                  )}
                  {video.isSaleVideo && !video.isBought && !video.trailer && (
                    <img className="video-thumbnail" src={video?.thumbnail} alt="" />
                  )}
                </div>

                <div className="video-stats">
                  {video?.isSaleVideo && !video.isBought && (
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={this.purchase.bind(this)}
                    >
                      Buy Video
                    </Button>
                  )}
                  {((loggedIn && video?.isBought)
                    || (loggedIn && !video?.isSaleVideo)) && (
                    <Button
                      type="dashed"
                      htmlType="button"
                      onClick={this.download.bind(this)}
                    >
                      <DownloadOutlined />
                      {' '}
                      Download
                    </Button>
                  )}
                </div>
                {video?.isSaleVideo && !video?.isBought && (
                  <div style={{ margin: '10px 0' }}>
                    <Alert
                      message="To view full content, please buy this video!"
                      type="error"
                    />
                  </div>
                )}
                <div className="video-info">
                  <div className="video-description">
                    {video?.description || 'No video description'}
                  </div>
                </div>
                {data?.performer && (
                  <ProfileCard
                    placeholderAvatarUrl={ui?.placeholderAvatarUrl}
                    performer={data.performer}
                    searching={loading}
                    success={success}
                  />
                )}
              </>
            ) : (
              <>
                <Loader spinning />
              </>
            )}
          </div>
        </>
      </>
    );
  }
}

const mapStates = (state) => ({
  ui: state.ui,
  loggedIn: state.auth.loggedIn,
  currentUser: state.user.current,
  currentPerformer: state.performer.current
});
const mapDispatchs = { updateCurrentUserBalance };

export default connect(mapStates, mapDispatchs)(VideoDetailPage);
