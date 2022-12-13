import { PureComponent } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import { IUIConfig } from 'src/interfaces/';
import Messenger from '@components/messages/Messenger';
import { resetMessageState } from '@redux/message/actions';

interface IProps {
  ui: IUIConfig;
  getList: Function;
  query: Record<string, string>;
  resetMessageState: Function;
}

class Messages extends PureComponent<IProps> {
  static authenticate = true;

  static layout = 'primary';

  static getInitialProps({ ctx }) {
    return {
      query: ctx.query
    };
  }

  componentWillUnmount() {
    const { resetMessageState: resetStateHandler } = this.props;
    resetStateHandler();
  }

  render() {
    const { query = {} } = this.props;
    return (
      <>
        <Head>
          <title>
            Messages
          </title>
        </Head>
        <Messenger toSource={query.toSource} toId={query.toId} />
      </>
    );
  }
}

const mapStates = (state: any) => ({
  ui: { ...state.ui }
});

const mapDispatch = { resetMessageState };
export default connect(mapStates, mapDispatch)(Messages);
