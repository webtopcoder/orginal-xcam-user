import Head from 'next/head';
import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import React, { PureComponent } from 'react';
import { postService } from '@services/post.service';
import { connect } from 'react-redux';
import Loader from '@components/common/base/loader';
import { IPost } from 'src/interfaces';
import { getResponseError } from 'src/lib';

interface P {
  ui: any;
  id: string;
}

interface S {
  fetching: boolean;
  post: IPost
}
class PostDetail extends PureComponent<P, S> {
  static authenticate = false;

  constructor(props: P) {
    super(props);
    this.state = {
      fetching: false,
      post: null
    };
  }

  static async getInitialProps({ ctx }: any) {
    const { query } = ctx;
    return query;
  }

  async componentDidMount() {
    this.getPost();
  }

  async componentDidUpdate(prevProps: P) {
    const { id } = this.props;
    if (prevProps.id !== id) {
      this.getPost();
    }
  }

  async getPost() {
    const { id } = this.props;
    try {
      this.setState({ fetching: true });
      const resp = await postService.findById(id);
      this.setState({ post: resp.data });
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    } finally {
      this.setState({ fetching: false });
    }
  }

  render() {
    const { post, fetching } = this.state;
    // const { ui } = this.props;
    return (
      <>
        <Head>
          <title>
            {post && post.title}
          </title>
        </Head>
        {fetching && (<Loader spinning fullScreen />)}
        <div className="page-container">
          <PageHeader title={post && post.title} />
          <div
            className="page-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post && post.content }}
          />
        </div>
      </>
    );
  }
}
const mapProps = (state: any) => ({
  ui: state.ui
});

export default connect(mapProps)(PostDetail);
