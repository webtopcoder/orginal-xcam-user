import { message } from 'antd';
import PageHeader from '@components/common/layout/page-header';
import Head from 'next/head';
import Router from 'next/router';
import React, { PureComponent } from 'react';
import StudioAddModelForm from '@components/studio/models-manager/studio-add-model-form';
import { getResponseError } from '@lib/utils';
import { studioService } from 'src/services';
import { updateTotalPerformer } from 'src/redux/studio/actions';
import { connect } from 'react-redux';

import './index.less';

interface IProps {
  updateTotalPerformer: Function;
}
interface IStates {
  error: boolean;
  loading: boolean;
  message: string;
}

class StudioAddModel extends PureComponent<IProps, IStates> {
  static authenticate = true;

  static layout = 'primary';

  state: IStates = {
    error: false,
    loading: false,
    message: ''
  };

  async onFinish(data) {
    const { updateTotalPerformer: dispatchUpdateTotalPerformer } = this.props;
    try {
      this.setState({ loading: true, error: false, message: '' });
      await studioService.addModel(data);
      message.success('Added successfully');
      dispatchUpdateTotalPerformer(1);
      Router.push('/studio/models');
    } catch (e) {
      const error = await Promise.resolve(e);
      this.setState({ error: true, message: getResponseError(error) });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { error, loading, message: newMessage } = this.state;
    return (
      <>
        <Head>
          <title>Add New Member</title>
        </Head>
        <div className="studio-models-background">
          <PageHeader title="" />
          <div className="studio-models-box">
            <StudioAddModelForm
              onFinish={this.onFinish.bind(this)}
              loading={loading}
              error={error}
              message={newMessage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { updateTotalPerformer })(StudioAddModel);
