/* eslint-disable no-return-assign */
import {
  Row, Col, message, Pagination
} from 'antd';
import Head from 'next/head';
import React, { PureComponent, createRef } from 'react';
import PurchasedVideoCard from 'src/components/videos/purchased-video-card';
import { videoService } from 'src/services';
import PopupVideoDetail from 'src/components/videos/popup-video';
import { getResponseError } from 'src/lib';
import PageHeader from '@components/common/layout/page-header';
import Loader from '@components/common/base/loader';

interface IProps {}
interface IStates {
  limit: number;
  offset: number;
  transactions: any[];
  loading: boolean;
  success: boolean;
  total: number;
}

class PurchasedVideoPage extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  popupRef = createRef() as any;

  constructor(props) {
    super(props);
    this.state = {
      limit: 12,
      offset: 0,
      transactions: [],
      loading: false,
      success: false,
      total: 0
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { limit, offset } = this.state;
    try {
      this.setState({ loading: true });
      const resp = await videoService.purchased({
        limit,
        offset
      });
      this.setState({
        transactions: resp.data.data,
        success: true,
        total: resp.data.total
      });
    } catch (error) {
      this.showError(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  async pageChange(page) {
    const { limit } = this.state;
    await this.setState({ offset: (page - 1) * limit });
    this.loadData();
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    message.error(getResponseError(err));
  }

  async playVideo(videoId: string) {
    const video = await videoService.userFindVideoById(videoId);
    this.popupRef.showModalBuyAssets(video.data?.video?.url);
    if (video.data?.video?.url) {
      videoService.increaseView(videoId);
    }
    return true;
  }

  render() {
    const {
      transactions, success, total, limit, loading
    } = this.state;
    return (
      <>
        <Head>
          <title>My Purchased Videos</title>
        </Head>
        <div className="main-profile-background">
          <PageHeader title="Purchased Videos" />
          <div className="purchased-videos-page pad40">
            {loading && <Loader spinning />}
            {success && transactions.length > 0 ? (
              <>
                <Row>
                  {transactions.map((transaction) => (
                    transaction.targetInfo && (
                    <Col
                      lg={6}
                      md={8}
                      sm={12}
                      xs={24}
                      key={transaction._id}
                      style={{ padding: '0 10px' }}
                    >
                      <PurchasedVideoCard
                        video={transaction.targetInfo}
                        performer={transaction.sellerInfo}
                        onClick={() => this.playVideo(transaction.targetId)}
                      />
                    </Col>
                    )
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
              </>
            ) : (
              <div className="pad20">
                You have not purchased any videos yet.
              </div>
            )}
          </div>
        </div>
        <div className="popup-video">
          <PopupVideoDetail ref={(ref) => (this.popupRef = ref)} />
        </div>
      </>
    );
  }
}
export default PurchasedVideoPage;
