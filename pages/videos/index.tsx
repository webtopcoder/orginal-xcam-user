import { Card, message, Alert } from 'antd';
import Head from 'next/head';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import {
  getPerformersVideos,
  addPerformerVideos
} from 'src/redux/videos/actions';
import { withRouter, NextRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroller';
import VideoSingleCard from '@components/videos/video-single-card';
import { IResponse } from '@services/api-request';
import { IDataResponse, IPerformer } from 'src/interfaces';
import { getResponseError } from 'src/lib';
import { videoService, performerService } from 'src/services';

import './index.less';
import Loader from '@components/common/base/loader';

interface IProps {
  router: NextRouter;
  performer: IPerformer;
  total: number;
  data: any;
  error: any;
  ids: string[];
  success: boolean;
  searching: boolean;
  getPerformersVideos: Function;
  addPerformerVideos: Function;
}
interface IState {
  limit: number;
  offset: number;
}

class VideosPage extends PureComponent<IProps, IState> {
  static async getInitialProps({ ctx }) {
    try {
      const { query } = ctx;
      if (query.performer) {
        return {
          performer: JSON.parse(query.performer)
        };
      }

      if (query.username) {
        const resp = await performerService.details(query.username);
        return {
          performer: resp.data
        };
      }

      return {};
    } catch {
      return {};
    }
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      limit: 12,
      offset: 0
    };
  }

  componentDidMount() {
    const {
      router,
      getPerformersVideos: dispatchGetPerformersVideos,
      performer
    } = this.props;
    const performerId = performer ? performer._id : '';
    dispatchGetPerformersVideos({
      ...router.query,
      ...this.state,
      performerId
    });
  }

  async loadMore() {
    try {
      let { offset } = this.state;
      const { limit } = this.state;
      const {
        router: { query },
        performer,
        addPerformerVideos: dispatchAddPerformerVideos
      } = this.props;
      const performerId = performer ? performer._id : '';
      offset = limit + offset;
      const resp: IResponse<IDataResponse<any>> = await videoService.search({
        ...query,
        performerId,
        limit,
        offset
      });
      dispatchAddPerformerVideos(resp.data.data);
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
      ids,
      data,
      searching,
      success,
      error,
      total,
      performer,
      router: { query }
    } = this.props;
    const username = performer && performer.username;
    const hasMore = ids.length < total;
    return (
      <>
        <Head>
          <title>
            {`${username}'s ` || ''}
            {' '}
            Videos
            {' '}
          </title>
        </Head>
        {searching && <Loader spinning fullScreen />}
        {error && <Alert type="error" message="Error request" banner />}
        {success && (
          <div className="videos-page">
            {query.username && !performer && (
              <Alert message="Performer not found." banner />
            )}
            <InfiniteScroll
              loadMore={this.loadMore.bind(this)}
              hasMore={hasMore}
              loader={<p>Loading...</p>}
            >
              <Card
                title={`${username || ''} Videos`}
                bordered={false}
                hoverable={false}
              >
                {ids.length > 0
                  && ids.map((id) => (
                    <Card.Grid hoverable={false}>
                      <VideoSingleCard
                        {...data[id]}
                        key={id}
                        video={data[id]}
                      />
                    </Card.Grid>
                  ))}
              </Card>
            </InfiniteScroll>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({ ...state.videos });
const mapDispatchs = { getPerformersVideos, addPerformerVideos };
export default withRouter(connect(mapStateToProps, mapDispatchs)(VideosPage));
