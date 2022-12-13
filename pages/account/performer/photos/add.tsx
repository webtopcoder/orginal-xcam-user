import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import PhotoForm from '@components/photos/photo-form';
import { photoService } from 'src/services';
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

class CreatePerformerPhotoPage extends PureComponent<IProps, IStates> {
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
      await photoService.create('/performer/performer-assets/photos/upload', {
        ...data,
        performerId: performer._id
      });
      message.success('Add photo success.');
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
          <title>Upload Photo</title>
        </Head>
        <div className="performer-photos-page">
          <PageHeader title="Create new Photo" />
          <PhotoForm
            loading={onSubmit}
            onFinish={this.onFinish.bind(this)}
            photo={{}}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer: state.performer.current
});
export default connect(mapStateToProps)(CreatePerformerPhotoPage);
