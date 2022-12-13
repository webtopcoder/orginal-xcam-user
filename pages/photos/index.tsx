/* eslint-disable no-return-assign */
import {
  message, Button, List, Row, Col
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPerformerPhotos } from '@redux/photos/actions';
import { updateCurrentUserBalance } from '@redux/user/actions';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IPhoto, IPerformerGallery } from 'src/interfaces';
import nextCookie from 'next-cookies';
import Error from 'pages/_error';
import { getResponseError, capitalizeFirstLetter } from 'src/lib';
import { galleryService, photoService } from 'src/services';

import './index.less';
import ModalBuyAssets from '@components/performer-assets/common/modal-buy-assets';
import Loader from '@components/common/base/loader';
import NumberFormat from '@components/common/layout/numberformat';

interface IProps {
  isBrowser: boolean;
  loggedIn: boolean;
  query: any;
  data: IPerformerGallery;
  updateCurrentUserBalance: Function;
}
interface IStates {
  photos: IPhoto[];
  gallery: IPerformerGallery;
  totalPhoto: number;
  searching: boolean;
  limit: number;
  offset: number;
  selectedItem: number;
  success: boolean;
  loading: boolean;
}

const ListItem = ({ description, title }: any) => (
  <List.Item>
    <Row style={{ width: '100%' }}>
      <Col className="light-text" sm={{ span: 6 }} xs={{ span: 12 }}>
        {title}
      </Col>
      <Col style={{ fontWeight: 'bold' }} sm={{ span: 18 }} xs={{ span: 12 }}>
        {description}
      </Col>
    </Row>
  </List.Item>
);

class PhotosPages extends PureComponent<IProps, IStates> {
  static authenticate = false;

  static layout = 'public';

  private buyAssetsRef;

  static async getInitialProps({ ctx }) {
    try {
      const { query } = ctx;
      if (query.data) return { data: JSON.parse(query.data), isBrowser: process.browser };
      if (query.id) {
        const { token } = nextCookie(ctx);
        const headers = { Authorization: token };
        const resp = await galleryService.publicdetails(query.id, headers);
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
      photos: [],
      limit: 12,
      offset: 0,
      totalPhoto: 0,
      selectedItem: 0,
      loading: false,
      success: true,
      searching: false,
      gallery: null
    };
  }

  componentDidMount() {
    this.getPhotosByGallery();
    const { data, isBrowser } = this.props;
    isBrowser
      ? this.getGalleryDetail()
      : this.setState({ gallery: data, success: true, loading: false });
  }

  handleBuyClick() {
    const { data } = this.props;
    this.buyAssetsRef && this.buyAssetsRef.showModalBuyAssets(data, 'gallery');
  }

  onSucess() {
    this.getPhotosByGallery();
  }

  async getGalleryDetail() {
    const { data } = this.props;
    this.setState({ success: false, loading: true });

    try {
      const resp = await galleryService.publicdetails(data._id);
      this.setState({ gallery: resp.data, success: true });
    } catch (error) {
      this.responseError(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  async getPhotosByGallery() {
    const { data } = this.props;
    const { limit, offset } = this.state;

    try {
      this.setState({ searching: true });
      const resp = await photoService.searchByGallery(data._id, {
        limit,
        offset
      });
      this.setState({
        photos: resp.data.data,
        totalPhoto: resp.data.total
      });
    } catch (error) {
      this.responseError(error);
    } finally {
      this.setState({ searching: false });
    }
  }

  async loadMore(index: number) {
    const { totalPhoto, photos, limit } = this.state;
    let { offset } = this.state;
    const { data } = this.props;
    const position = index + 1;
    if (position !== photos.length) return;

    const hasMore = photos.length < totalPhoto;
    if (hasMore) {
      try {
        offset = limit + offset;
        const resp = await photoService.searchByGallery(data._id, {
          limit,
          offset
        });
        this.setState({ photos: [...photos, ...resp.data.data], offset });
      } catch (error) {
        this.responseError(error);
      } finally {
        this.setState({ searching: false });
      }
    }
  }

  async responseError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  render() {
    const {
      photos, selectedItem, success, loading, gallery, searching
    } = this.state;
    const { data } = this.props;
    if (!data) return <Error statusCode={404} />;

    const {
      name, description, token, isSale, numOfItems
    } = data;
    const dataSource = [
      {
        title: 'Name',
        description: name
      },
      { title: 'Description', description },
      { title: 'Photos', description: numOfItems },
      { title: 'Price', description: !isSale ? 'Free' : <NumberFormat value={token} suffix=" tokens" /> }
    ];
    return (
      <>
        <Head>
          <title> Photos </title>
        </Head>
        <ModalBuyAssets
          ref={(ref) => (this.buyAssetsRef = ref)}
          onSucess={this.onSucess.bind(this)}
          {...this.props}
        />
        <div className="photo-page">
          <PageHeader
            title={`${capitalizeFirstLetter(name)} Gallery`}
            extra={(
              <Button
                type="primary"
                hidden={gallery?.isBought}
                onClick={this.handleBuyClick.bind(this)}
              >
                Buy this gallery!
              </Button>
            )}
          />
          {success && !loading && (
            <div className="photo-carousel-content">
              {searching && (<Loader spinning fullScreen={false} />)}
              <Carousel
                dynamicHeight
                onClickItem={(index) => this.setState({ selectedItem: index + 1 })}
                selectedItem={selectedItem}
                onChange={this.loadMore.bind(this)}
                showIndicators
                swipeable
              >
                {photos.length > 0
                && photos.map((p) => (
                  <div key={p._id}>
                    <img
                      alt=""
                      src={p.photo.url}
                      style={{ objectFit: 'contain' }}
                    />
                    <p className="legend">{p.title}</p>
                  </div>
                ))}
              </Carousel>
              <List
                dataSource={dataSource}
                renderItem={(item) => (
                  <ListItem description={item.description} title={item.title} />
                )}
              />
            </div>
          ) }

        </div>
      </>
    );
  }
}
const mapStates = (state) => ({
  photos: state.photos.data,
  total: state.photos.total,
  searching: state.photos.searching,
  success: state.photos.success,
  loggedIn: state.auth.loggedIn
});
const mapDispatchs = { getPerformerPhotos, updateCurrentUserBalance };
export default connect(mapStates, mapDispatchs)(PhotosPages);
