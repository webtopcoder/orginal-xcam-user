/* eslint-disable react/no-danger */
import './public-layout.less';
import { PureComponent } from 'react';
import {
  Layout, BackTop, Modal
} from 'antd';
import { connect } from 'react-redux';
import { updateUIValue, loadUIValue } from 'src/redux/ui/actions';
import { IMenu, IUIConfig } from 'src/interfaces/ui-config';
import Header from '@components/common/layout/header';
import Head from 'next/head';
import Footer from '@components/common/layout/footer';
import { postService } from 'src/services';
import { Popup18PlusContent } from 'src/components/common/layout';

interface DefaultProps extends IUIConfig {
  children: any;
  loggedIn: boolean;
  config: IUIConfig;
  updateUIValue: Function;
  loadUIValue: Function;
  menus: IMenu[];
  popup18Enabled: boolean;
  popup18ContentId: string;
}

class PrimaryLayout extends PureComponent<DefaultProps> {
  state = {
    popupContent18: '',
    visiblePopup18: false
  };

  componentDidMount() {
    const { loadUIValue: dispatchLoadUIValue, popup18Enabled } = this.props;
    dispatchLoadUIValue();
    if (process.browser) {
      const { agree18 } = localStorage;
      if (agree18 !== 'yes' && popup18Enabled) {
        this.setState({ visiblePopup18: true });
        this.getPopup18PlusContent();
      }
    }
  }

  handlePopup18Ok() {
    // set cookie / local storage and hide popup
    localStorage.setItem('agree18', 'yes');
    this.setState({ visiblePopup18: false });
  }

  handlePopup18Cancel() {
    window.location.href = 'http://www.google.com';
  }

  onThemeChange = (theme: string) => {
    const { updateUIValue: dispatchUpdateUIValue } = this.props;
    dispatchUpdateUIValue({ theme });
  };

  onCollapseChange = (collapsed) => {
    const { updateUIValue: dispatchUpdateUIValue } = this.props;
    dispatchUpdateUIValue({ collapsed });
  };

  async getPopup18PlusContent() {
    try {
      const { popup18ContentId } = this.props;
      const resp = await postService.findById(popup18ContentId);
      this.setState({
        popupContent18: resp.data?.content || ''
      });
    } catch {
      this.setState({ popupContent18: '' });
    }
  }

  render() {
    const {
      children,
      logo,
      // siteName,
      theme,
      popup18ContentId
    } = this.props;
    const { popupContent18, visiblePopup18 } = this.state;
    const headerProps = {
      logo,
      theme,
      onCollapseChange: this.onCollapseChange
    };

    return (
      <>
        <Head>
          <script type="application/javascript" src="/lib/adapter-latest.js" />
          <script type="application/javascript" src="/lib/webrtc_adaptor.js" />
          <link
            href="https://unpkg.com/video.js@7.8.3/dist/video-js.css"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/video.js@7.8.3/dist/video.js" />
          <script src="https://unpkg.com/@videojs/http-streaming@1.13.3/dist/videojs-http-streaming.js" />
        </Head>
        <Layout id="publicLayout" className="container">
          <Header {...headerProps} />
          <div className="content">
            {/* <Bread routeList={newRouteList} /> */}
            {children}
          </div>
          <Footer />
          <Modal
            width={770}
            centered
            visible={visiblePopup18}
            title="This website includes Adult content"
            okText="I'm atleast 18 years of age"
            cancelText="Take me back"
            onOk={this.handlePopup18Ok.bind(this)}
            onCancel={() => this.handlePopup18Cancel()}
          >
            {(popup18ContentId && popupContent18) ? <div dangerouslySetInnerHTML={{ __html: popupContent18 }} /> : <Popup18PlusContent />}
          </Modal>
          <BackTop
            className="backTop"
            target={() => document.querySelector('#publicLayout') as HTMLElement}
          />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...state.ui,
  ...state.auth
});
const mapDispatchToProps = { updateUIValue, loadUIValue };

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryLayout);
