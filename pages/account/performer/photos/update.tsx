import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import PhotoForm from '@components/photos/photo-form';
import { photoService } from 'src/services';
import { getResponseError } from '@lib/utils';
import { IPerformer, IPhoto, IResponse } from 'src/interfaces';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import Error from '../../../_error';

import './index.less';

interface IProps {
  performer: IPerformer;
  photo: IPhoto;
}

interface IStates {
  onSubmit: boolean;
}

class UpdatePerformerPhotoPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  static async getInitialProps({ ctx }) {
    try {
      const {
        query: { data, id }
      } = ctx;
      if (process.browser && data) {
        return {
          photo: JSON.parse(data)
        };
      }

      const { token } = nextCookie(ctx);
      const resp: IResponse<IPhoto> = await photoService.details(id, {
        Authorization: token
      });
      return {
        photo: resp.data
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
    const { performer, photo } = this.props;
    try {
      this.setState({ onSubmit: true });
      await photoService.update(`/performer/performer-assets/photos/${photo._id}`, {
        ...data,
        performerId: performer._id
      });
      message.success('Update photo success.');
      Router.back();
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    } finally {
      this.setState({ onSubmit: false });
    }
  }

  render() {
    const { photo } = this.props;
    if (!photo) return <Error statusCode={404} />;

    const { onSubmit } = this.state;
    return (
      <>
        <Head>
          <title>Update Photo</title>
        </Head>
        <div className="performer-photos-page">
          <PageHeader title="Update a Photo" />
          <PhotoForm
            loading={onSubmit}
            onFinish={this.onFinish.bind(this)}
            photo={photo}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer: state.performer.current
});
export default connect(mapStateToProps)(UpdatePerformerPhotoPage);
