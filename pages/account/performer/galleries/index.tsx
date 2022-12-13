import React, { PureComponent } from 'react';
import Head from 'next/head';
import {
  Button, Space, message
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import { connect } from 'react-redux';
import {
  IPerformerGallery,
  ISearch,
  IResponse,
  IDataResponse
} from 'src/interfaces';
import {
  getMyPhotos,
  removeMyPhoto,
  addMyPhotos,
  getMyGalleries,
  removeMyGalleries,
  addMyGalleries
} from '@redux/performer/actions';
import { getResponseError } from '@lib/utils';
import Router from 'next/router';
import GalleriesGrid from '@components/galleries/gallery-dashboard-grid';
import './index.less';
import { photoService, galleryService } from 'src/services';

interface IProps {
  data: IPerformerGallery[];
  total: number;
  searching: boolean;
  success: boolean;
  getMyPhotos: Function;
  removeMyPhoto: Function;
  addMyPhotos: Function;
  getMyGalleries: Function;
  removeMyGalleries: Function;
  addMyGalleries: Function;
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
    this.loadGalleries();
  }

  async onRemove(id: string) {
    const { removeMyGalleries: dispatchRemoveMyGalleries } = this.props;
    try {
      await galleryService.remove(id);
      message.success('Removed!');
      dispatchRemoveMyGalleries(id);
    } catch (e) {
      this.showError(e);
    }
  }

  loadGalleries() {
    const { getMyGalleries: dispatchGetMyGalleries } = this.props;
    dispatchGetMyGalleries({ ...this.state });
  }

  async addGalleries() {
    const { addMyGalleries: dispatchAddMyGalleries } = this.props;
    try {
      const { limit } = this.state;
      let { offset } = this.state;
      offset = limit + offset;
      const resp: IResponse<IDataResponse<
        IPerformerGallery
      >> = await photoService.myPhotos({ ...this.state, offset });
      dispatchAddMyGalleries(resp.data.data);
      this.setState({ offset });
    } catch (e) {
      this.showError(e);
    }
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  render() {
    const {
      data, searching, total, success
    } = this.props;
    const galleriesGridProps = {
      data,
      searching,
      success,
      total,
      hasMore: !searching && data.length < total,
      addGalleries: this.addGalleries.bind(this),
      remove: this.onRemove.bind(this),
      title: ''
    };
    return (
      <>
        <Head>
          <title>My Galleries</title>
        </Head>
        <div className="performer-gallries-page">
          <PageHeader
            title="Galleries"
            extra={(
              <Space>
                <Button
                  type="primary"
                  onClick={() => Router.push('/account/performer/galleries/add')}
                >
                  Add a new photo gallery
                </Button>
                <Button
                  type="primary"
                  onClick={() => Router.push('/account/performer/photos/add')}
                >
                  Add a new photo
                </Button>
              </Space>
          )}
          />
          <GalleriesGrid {...galleriesGridProps} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.performer.assets.galleries
});
const mapDispatchs = {
  getMyPhotos,
  removeMyPhoto,
  addMyPhotos,
  getMyGalleries,
  removeMyGalleries,
  addMyGalleries
};
export default connect(mapStateToProps, mapDispatchs)(PerformerPhotoPage);
