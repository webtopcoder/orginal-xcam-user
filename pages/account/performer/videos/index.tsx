/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import { Button, message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import {
  getMyVideos,
  removeMyVideo,
  addMyVideos
} from '@redux/performer/actions';
import { ISearch, IDataResponse, IVideo } from 'src/interfaces';
import { videoService } from 'src/services';
import { IResponse } from '@services/api-request';
import { getResponseError } from '@lib/utils';
import VideoGrid from '@components/videos/video-grid';
import Router from 'next/router';
import PopupVideoDetail from '@components/videos/popup-video';
import './index.less';
import Loader from '@components/common/base/loader';

interface IProps {
  data: IVideo[];
  total: number;
  searching: boolean;
  success: boolean;
  getMyVideos: Function;
  removeMyVideo: Function;
  addMyVideos: Function;
}

interface IStates extends ISearch {
  filter?: any;
}

class PerformerVideosPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  private ref;

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 12,
      offset: 0
    };
  }

  componentDidMount() {
    this.loadVideos();
  }

  async onRemove(id: string) {
    const { removeMyVideo: dispatchRemoveMyVideo } = this.props;
    try {
      await videoService.removeMyVideo(id);
      message.success('Removed!');
      dispatchRemoveMyVideo(id);
    } catch (e) {
      this.showError(e);
    }
  }

  async addVideos() {
    const { addMyVideos: dispatchAddMyVideos } = this.props;
    try {
      const { limit } = this.state;
      let { offset } = this.state;
      offset = limit + offset;
      const resp: IResponse<IDataResponse<
        IVideo
      >> = await videoService.myVideos({ ...this.state, offset });
      dispatchAddMyVideos(resp.data.data);
      this.setState({ offset });
    } catch (e) {
      this.showError(e);
    }
  }

  loadVideos() {
    const { getMyVideos: dispatchGetMyVideos } = this.props;
    dispatchGetMyVideos({ ...this.state, offset: 0 });
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  render() {
    const {
      data, searching, total, success
    } = this.props;

    return (
      <>
        <Head>
          <title>My Videos</title>
        </Head>
        <div className="performer-videos-page">
          <PageHeader
            title="Videos"
            extra={(
              <Button
                type="primary"
                onClick={() => Router.push('/account/performer/videos/add')}
              >
                Upload Video
              </Button>
          )}
          />
          <Loader spinning={searching} />
          <VideoGrid
            success={success}
            addVideos={this.addVideos.bind(this)}
            remove={this.onRemove.bind(this)}
            data={data}
            hasMore={!searching && data.length < total}
            title=""
            onViewVideo={(video: IVideo) => this.ref.showModalBuyAssets(video.video.url || '')}
          />
          <PopupVideoDetail ref={(ref) => (this.ref = ref)} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.performer.assets.videos
});
const mapDispatch = { getMyVideos, removeMyVideo, addMyVideos };
export default connect(mapStateToProps, mapDispatch)(PerformerVideosPage);
