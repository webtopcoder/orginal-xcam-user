import {
  Row, Col, Pagination, message
} from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import React, { PureComponent } from 'react';
import PurchasedGalleryCard from 'src/components/galleries/purchased-gallery-card';
import { galleryService } from 'src/services';
import { ISearch } from 'src/interfaces';
import { getResponseError } from 'src/lib';
import { omit } from 'lodash';
import Loader from '@components/common/base/loader';

interface IProps {}
interface IStates extends ISearch {
  data: any[];
  total: number;
  loading: boolean;
}

class PurchasedGalleriesPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  constructor(props) {
    super(props);
    this.state = {
      limit: 12,
      offset: 0,
      sortBy: 'createdAt',
      sort: 'desc',
      data: [],
      total: 0,
      loading: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = omit(this.state, ['data', 'total', 'loading']);
    await this.setState({ loading: true });
    try {
      await this.setState({ loading: true });
      const resp = await galleryService.purchased({ ...query });
      await this.setState({ data: resp.data.data, total: resp.data.total });
    } catch (error) {
      this.showError(error);
    } finally {
      await this.setState({ loading: false });
    }
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  async pageChange(page) {
    const { limit } = this.state;
    await this.setState({ offset: (page - 1) * limit });
    this.loadData();
  }

  render() {
    const {
      data, loading, total, limit
    } = this.state;
    return (
      <>
        <Head>
          <title>My Purchased Galleries</title>
        </Head>
        <div className="main-profile-background">
          <PageHeader title="Purchased Gallery" />
          <div className="purchased-videos-page pad40">
            {loading && <Loader spinning />}
            {data?.length ? (
              <Row>
                {data.map((gallery) => gallery.targetInfo && (
                  <Col lg={6} md={8} sm={12} xs={24} key={gallery._id} style={{ padding: '0 10px' }}>
                    <PurchasedGalleryCard gallery={gallery.targetInfo} />
                  </Col>
                ))}
                {total > limit && (
                <Col sm={24} style={{ textAlign: 'center' }}>
                  <Pagination
                    onChange={this.pageChange.bind(this)}
                    defaultCurrent={1}
                    pageSize={limit}
                    total={total}
                  />
                </Col>
                )}
              </Row>
            ) : (
              <div className="pad20">
                You have not purchased any galleries yet.
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default PurchasedGalleriesPage;
