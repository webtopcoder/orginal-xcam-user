import React, { PureComponent } from 'react';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import { connect } from 'react-redux';
import Form from '@components/photos/gallery-form';
import { galleryService, photoService } from 'src/services';
import { getResponseError } from '@lib/utils';
import { IPerformer, IPerformerGallery, IResponse } from 'src/interfaces';
import nextCookie from 'next-cookies';
import Error from '../../../_error';

import './index.less';

interface IProps {
  performer: IPerformer;
  gallery: IPerformerGallery;
}

interface IStates {
  onSubmit: boolean;
}

class UpdatePerformerGalleryPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  static async getInitialProps({ ctx }) {
    try {
      const {
        query: { data, id }
      } = ctx;
      if (process.browser && data) {
        return {
          gallery: JSON.parse(data)
        };
      }

      const { token } = nextCookie(ctx);
      const resp: IResponse<IPerformerGallery> = await galleryService.details(
        id,
        {
          Authorization: token
        }
      );
      return {
        gallery: resp.data
      };
    } catch {
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
    const { performer, gallery } = this.props;
    try {
      this.setState({ onSubmit: true });
      await galleryService.update(gallery._id, {
        ...data,
        performerId: performer._id
      });
      message.success('Update gallery success.');
    } catch (e) {
      this.showError(e);
    } finally {
      this.setState({ onSubmit: false });
    }
  }

  async remove(id: string) {
    try {
      await photoService.remove(id);
      message.success('Removed!');
    } catch (e) {
      this.showError(e);
    }
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  render() {
    const { gallery, performer } = this.props;
    if (!gallery) return <Error statusCode={404} />;

    const { onSubmit } = this.state;
    return (
      <>
        <Head>
          <title>
            Update Gallery
            {' '}
            {gallery && gallery.name}
          </title>
        </Head>
        <div className="performer-gallries-page">
          <PageHeader title="Update a Gallery" />
          <Form
            loading={onSubmit}
            performer={performer}
            onFinish={this.onFinish.bind(this)}
            gallery={gallery}
            remove={this.remove.bind(this)}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer: state.performer.current
});
export default connect(mapStateToProps)(UpdatePerformerGalleryPage);
