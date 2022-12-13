import React, { PureComponent } from 'react';
import Head from 'next/head';
import {
  Button, Space, message
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { connect } from 'react-redux';
import {
  IPhoto, ISearch, IResponse, IDataResponse
} from 'src/interfaces';
import {
  getMyPhotos,
  removeMyPhoto,
  addMyPhotos
} from '@redux/performer/actions';
import { getResponseError } from '@lib/utils';
import Router from 'next/router';
import PhotoGrid from '@components/photos/photo-dashboard-grid';

import './index.less';
import { photoService } from 'src/services';

interface IProps {
  data: IPhoto[];
  total: number;
  searching: boolean;
  success: boolean;
  getMyPhotos: Function;
  removeMyPhoto: Function;
  addMyPhotos: Function;
}

interface IStates extends ISearch {
  filter?: any;
}

class PerformerPhotoPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 12,
      offset: 0
    };
  }

  componentDidMount() {
    this.loadPhotos();
  }

  async onRemove(id: string) {
    const { removeMyPhoto: dispatchRemoveMyPhoto } = this.props;
    try {
      await photoService.remove(id);
      message.success('Removed!');
      dispatchRemoveMyPhoto(id);
    } catch (e) {
      this.showError(e);
    }
  }

  async addPhotos() {
    const { addMyPhotos: dispatchAddMyPhotos } = this.props;
    try {
      const { limit } = this.state;
      let { offset } = this.state;
      offset = limit + offset;
      const resp: IResponse<IDataResponse<IPhoto>> = await photoService.myPhotos({ ...this.state, offset });
      dispatchAddMyPhotos(resp.data.data);
      this.setState({ offset });
    } catch (e) {
      this.showError(e);
    }
  }

  loadPhotos() {
    const { getMyPhotos: dispatchGetMyPhotos } = this.props;
    dispatchGetMyPhotos({ ...this.state });
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  render() {
    const {
      data, searching, total, success
    } = this.props;
    const photoGridProps = {
      data,
      searching,
      success,
      total,
      hasMore: !searching && data.length < total,
      addPhotos: this.addPhotos.bind(this),
      remove: this.onRemove.bind(this),
      title: ''
    };
    return (
      <>
        <Head>
          <title>My Photos</title>
        </Head>
        <div className="performer-photos-page">
          <PageHeader
            title="Photos"
            extra={(
              <Space>
                <Button type="primary" onClick={() => Router.push('/account/performer/galleries/add')}>
                  Add a new gallery
                </Button>
                <Button type="primary" onClick={() => Router.push('/account/performer/photos/add')}>
                  Add new photos
                </Button>
              </Space>
          )}
          />
          <PhotoGrid {...photoGridProps} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.performer.assets.photos
});
const mapDispatchs = { getMyPhotos, removeMyPhoto, addMyPhotos };
export default connect(mapStateToProps, mapDispatchs)(PerformerPhotoPage);
