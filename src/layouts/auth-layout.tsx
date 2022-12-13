import './auth-layout.less';
import React from 'react';
import { Layout, BackTop } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { connect } from 'react-redux';
import Router from 'next/router';
import { updateUIValue, loadUIValue } from 'src/redux/ui/actions';
import { IMenu, IUIConfig } from 'src/interfaces/ui-config';
import Header from '@components/common/layout/header';
import Footer from '@components/common/layout/footer';

interface DefaultProps extends IUIConfig {
  children: any;
  config: IUIConfig;
  updateUIValue: Function;
  loadUIValue: Function;
  menus: IMenu[];
  loggedIn: boolean;
}

export async function getStaticProps() {
  return {
    props: {}
  };
}

class AuthLayout extends React.PureComponent<DefaultProps> {
  state = {
    isMobile: false
  };

  enquireHandler: any;

  componentDidMount() {
    const { loadUIValue: dispatchLoadUIValue, loggedIn } = this.props;
    if (loggedIn) {
      Router.push('/');
      return;
    }

    dispatchLoadUIValue();
    this.enquireHandler = enquireScreen((mobile) => {
      const { isMobile } = this.state;
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile
        });
      }
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  onThemeChange = (theme: string) => {
    const { updateUIValue: dispatchUpdateUIValue } = this.props;
    dispatchUpdateUIValue({ theme });
  };

  onCollapseChange = (collapsed) => {
    const { updateUIValue: dispatchUpdateUIValue } = this.props;
    dispatchUpdateUIValue({ collapsed });
  };

  render() {
    const {
      children,
      collapsed,
      logo,
      // siteName,
      theme
    } = this.props;
    const headerProps = {
      logo,
      collapsed,
      theme,
      onCollapseChange: this.onCollapseChange
    };

    return (
      <Layout className="container" id="authLayout">
        <Header {...headerProps} />
        <div className="content">
          {/* <Bread routeList={newRouteList} /> */}
          {children}
        </div>
        <Footer />
        <BackTop className="backTop" />
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...state.ui,
  loggedIn: state.auth.loggedIn,
  auth: state.auth
});
const mapDispatchToProps = { updateUIValue, loadUIValue };

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
