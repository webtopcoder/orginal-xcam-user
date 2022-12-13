import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import VideoForm from '@components/videos/video-form';
import { videoService } from 'src/services';
import { getResponseError } from '@lib/utils';
import { IPerformer } from 'src/interfaces';
import Router from 'next/router';

import './index.less';

interface IProps {
  performer: IPerformer;
}

interface IStates {
  onSubmit: boolean;
}

class CreatePerformerVideosPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      onSubmit: false
    };
  }

  async onFinish(data) {
    const { performer } = this.props;
    try {
      this.setState({ onSubmit: true });
      await videoService.create('/performer/performer-assets/videos/upload', {
        ...data,
        performerId: performer._id
      });
      message.success('Add video success.');
      Router.back();
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ onSubmit: false });
    }
  }

  render() {
    const { onSubmit } = this.state;
    return (
      <>
        <Head>
          <title>My Videos - Upload</title>
        </Head>
        <div className="performer-videos-page">
          <PageHeader title="Create new Video" />
          <VideoForm
            loading={onSubmit}
            onFinish={this.onFinish.bind(this)}
            video={{}}
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
