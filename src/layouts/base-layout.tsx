import React from 'react';
import Router from 'next/router';
import { IUIConfig } from 'src/interfaces';
import Loader from '@components/common/base/loader';
import PrimaryLayout from './primary-layout';
import PublicLayout from './public-layout';
import DefaultLayout from './default-layout';
import AuthLayout from './auth-layout';
import MaintenanceLayout from './maintenance-layout';

interface DefaultProps {
  children: any;
  appConfig?: IUIConfig;
  layout?: string;
  maintenanceMode?: boolean;
}

interface DefaultStates {
  routerChange: boolean;
}

const LayoutMap = {
  maintenance: MaintenanceLayout,
  primary: PrimaryLayout,
  public: PublicLayout,
  auth: AuthLayout,
  default: DefaultLayout
};

export default class BaseLayout extends React.PureComponent<DefaultProps, DefaultStates> {
  constructor(props: DefaultProps) {
    super(props);
    this.state = {
      routerChange: false
    };
  }

  componentDidMount() {
    this.handleStateChange();
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onRouteChangeStart);
    Router.events.off('routeChangeComplete', this.onRouteChangeComplete);
  }

  handleStateChange() {
    Router.events.on('routeChangeStart', this.onRouteChangeStart);
    Router.events.on('routeChangeComplete', this.onRouteChangeComplete);
  }

  onRouteChangeStart = () => {
    this.setState({ routerChange: true });
  }

  onRouteChangeComplete = () => {
    this.setState({ routerChange: false });
  }

  render() {
    const { children, layout, maintenanceMode = false } = this.props;
    const { routerChange } = this.state;
    if (maintenanceMode) {
      return <MaintenanceLayout />;
    }

    const Container = layout && LayoutMap[layout] ? LayoutMap[layout] : LayoutMap.public;
    return (
      <>
        <Container>
          {routerChange && <Loader spinning fullScreen />}
          {children}
        </Container>
      </>
    );
  }
}
