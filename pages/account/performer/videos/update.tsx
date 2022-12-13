import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import VideoForm from '@components/videos/video-form';
import { videoService } from 'src/services';
import { getResponseError } from '@lib/utils';
import { IPerformer, IVideo, IResponse } from 'src/interfaces';
import nextCookie from 'next-cookies';
import Error from '../../../_error';

import './index.less';

interface IProps {
  performer: IPerformer;
  video: IVideo;
}

interface IStates {
  onSubmit: boolean;
}

class CreatePerformerVideosPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  static async getInitialProps({ ctx }) {
    try {
      const {
        query: { video, id }
      } = ctx;
      if (process.browser && video) {
        return {
          video: JSON.parse(video)
        };
      }

      const { token } = nextCookie(ctx);
      const resp: IResponse<IVideo> = await videoService.details(id, {
        Authorization: token
      });
      return {
        video: resp.data
      };
    } catch (e) {
      return {};
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      onSubmit: false
    };
  }

  async onFinish(data) {
    const { performer, video } = this.props;
    try {
      this.setState({ onSubmit: true });
      await videoService.update(
        `/performer/performer-assets/videos/${video._id}`,
        { ...data, performerId: performer._id }
      );
      message.success('Update video success.');
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ onSubmit: false });
    }
  }

  render() {
    const { video } = this.props;
    if (!video) return <Error statusCode={404} />;

    const { onSubmit } = this.state;
    return (
      <>
        <Head>
          <title>
            Update Video -
            {video && video.title}
          </title>
        </Head>
        <div className="performer-videos-page">
          <PageHeader title="Update a Video" />
          <VideoForm
            loading={onSubmit}
            onFinish={this.onFinish.bind(this)}
            video={video}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer: state.performer.current
});
export default connect(mapStateToProps)(CreatePerformerVideosPage);
