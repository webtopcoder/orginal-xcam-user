import './primary-layout.less';
import React from 'react';
import {
  Layout, BackTop, Row, Col, Button, Space
} from 'antd';
import Head from 'next/head';
import { connect } from 'react-redux';
import Router from 'next/router';
import { loadUIValue } from 'src/redux/ui/actions';
import { IUIConfig } from 'src/interfaces/ui-config';
import Header from '@components/common/layout/header';
import {
  GlobalOutlined,
  // RollbackOutlined,
  UserOutlined,
  SettingOutlined,
  MessageOutlined,
  HeartOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  LineChartOutlined,
  SolutionOutlined,
  CalendarOutlined
} from '@ant-design/icons';
// import { SiderMenu } from '@components/common/layout/menu';
import {
  FundsIcon,
  PaymentTokensHistoryIcon,
  TransactionHistoryIcon,
  PurchasedImageIcon,
  PurchasedItemIcon,
  PurchasedVideoIcon,
  MyProductIcon,
  VideosIcon,
  PhotosIcon,
  EarningIcon,
  PayoutRequestIcon,
  Group
} from '@components/common/base/icons';
import { IUser, IPerformer, IStudio } from 'src/interfaces';
// import dynamic from 'next/dynamic';
import { converDuration, createSelector } from 'src/lib';
import Footer from '@components/common/layout/footer';
import NumberFormat from '@components/common/layout/numberformat';
import SideMenu from '@components/common/layout/menu';
import { isMobile } from 'react-device-detect';

// const SiderMenuNoSSR = dynamic(() => import('@components/common/layout/menu'), {
//   ssr: false
// });

interface DefaultProps extends IUIConfig {
  children: any;
  loggedIn: boolean;
  config: IUIConfig;
  updateUIValue: Function;
  loadUIValue: Function;
  currentUser: IUser & IPerformer & IStudio;
  totalNotReadMessage: number;
}

const userSettingMenu = [
  {
    id: 'account-settings',
    name: 'Account Settings',
    route: '/account/user/account-settings',
    icon: <SettingOutlined />
  },
  {
    id: 'messages',
    name: 'Messages',
    route: '/messages',
    icon: <MessageOutlined />
  },
  {
    id: 'favorites',
    name: 'My favorites',
    route: '/account/user/favorites',
    icon: <HeartOutlined />
  },
  {
    id: 'funds-tokens',
    name: 'Funds / Tokens',
    route: '/account/user/funds-tokens',
    icon: (
      <span className="anticon">
        <FundsIcon />
      </span>
    )
  },
  {
    id: 'transaction-history',
    name: 'Transaction History',
    route: '/account/user/transaction-history',
    icon: (
      <span className="anticon">
        <TransactionHistoryIcon />
      </span>
    )
  },
  {
    id: 'payment-token-history',
    name: 'Payment Tokens History',
    route: '/account/user/payment-token-history',
    icon: (
      <span className="anticon">
        <PaymentTokensHistoryIcon />
      </span>
    )
  },
  {
    id: 'order',
    name: 'My orders',
    route: '/account/user/orders',
    icon: <OrderedListOutlined />
  },
  {
    id: 'purchased-galleries',
    name: 'Purchased Galleries',
    route: '/account/user/purchased-gallery',
    icon: (
      <span className="anticon">
        <PurchasedImageIcon />
      </span>
    )
  },
  {
    id: 'purchased-videos',
    name: 'Purchased Videos',
    route: '/account/user/purchased-video',
    icon: (
      <span className="anticon">
        <PurchasedVideoIcon />
      </span>
    )
  },
  {
    id: 'purchased-products',
    name: 'Purchased Products',
    route: '/account/user/purchased-product',
    icon: (
      <span className="anticon">
        <PurchasedItemIcon />
      </span>
    )
  }
  // {
  //   id: 'refund-request',
  //   name: 'Refund Requests',
  //   route: '/account/user/refund-request',
  //   icon: <RollbackOutlined />
  // }
];

const performerSettingMenu = [
  {
    id: 'profile',
    name: 'Profile',
    route: '/account/performer/profile',
    icon: <UserOutlined />
  },
  {
    id: 'account-settings',
    name: 'Account Settings',
    route: '/account/performer/account-settings',
    icon: <SettingOutlined />
  },
  {
    id: 'messages',
    name: 'Messages',
    route: '/messages',
    icon: <MessageOutlined />
  },
  {
    id: 'earning',
    name: 'Earnings',
    route: '/account/performer/earning',
    icon: (
      <span className="anticon">
        <EarningIcon />
      </span>
    )
  },
  {
    id: 'schedules',
    name: 'Schedules',
    route: '/account/performer/schedules',
    icon: <CalendarOutlined />
  },
  {
    id: 'my-products',
    name: 'Products',
    route: '/account/performer/products',
    icon: (
      <span className="anticon">
        <MyProductIcon />
      </span>
    )
  },
  {
    id: 'my-videos',
    name: 'Videos',
    route: '/account/performer/videos',
    icon: (
      <span className="anticon">
        <VideosIcon />
      </span>
    )
  },
  {
    id: 'my-galleries',
    name: 'Galleries',
    route: '/account/performer/galleries',
    icon: (
      <span className="anticon">
        <PhotosIcon />
      </span>
    )
  },
  {
    id: 'my-blocking',
    name: 'Blocking',
    route: '/account/performer/geo-block',
    icon: <GlobalOutlined />
  },
  {
    id: 'payout-request',
    name: 'Payout Request',
    route: '/account/performer/payout-requests',
    icon: (
      <span className="anticon">
        <PayoutRequestIcon />
      </span>
    )
  },
  {
    id: 'order',
    name: 'Orders',
    route: '/account/performer/orders',
    icon: <OrderedListOutlined />
  }
];

const studioSettingMenu = [
  {
    id: 'account-settings',
    name: 'Account Settings',
    route: '/studio/account-settings',
    icon: <SettingOutlined />
  },
  {
    id: 'earning',
    name: 'Earnings',
    route: '/studio/earning',
    icon: (
      <span className="anticon">
        <EarningIcon />
      </span>
    )
  },
  {
    id: 'commission',
    name: 'Model commissions',
    route: '/studio/commissions',
    icon: <PieChartOutlined />
  },
  {
    id: 'studio-models',
    name: 'Models',
    route: '/studio/models',
    icon: (
      <span className="anticon">
        <Group />
      </span>
    )
  },
  {
    id: 'studio-payout-requests',
    name: 'My Payout request',
    route: '/studio/payout-requests',
    icon: (
      <span className="anticon">
        <PayoutRequestIcon />
      </span>
    )
  },
  {
    id: 'studioperformer-requests',
    name: 'Performer Payout Requests',
    route: '/studio/payout-requests/performer-requests',
    icon: <SolutionOutlined />
  },
  {
    id: 'performer-stats',
    name: 'Performer Stats',
    route: '/studio/models/stats',
    icon: <LineChartOutlined />
  }
];

class PrimaryLayout extends React.PureComponent<DefaultProps> {
  enquireHandler: any;

  rightPrimaryLayoutRef = React.createRef<HTMLDivElement>();

  constructor(props: DefaultProps) {
    super(props);
  }

  componentDidMount() {
    const { loadUIValue: dispatchLoadUIValue } = this.props;
    dispatchLoadUIValue();
    // this.rightPrimaryLayoutRef = React.createRef<HTMLDivElement>();
    this.onRouteChangeStart();
    Router.events.on('routeChangeStart', this.onRouteChangeStart);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onRouteChangeStart);
  }

  onLive() {
    Router.push('/live');
  }

  onRouteChangeStart = () => {
    if (isMobile && this.rightPrimaryLayoutRef.current instanceof HTMLDivElement) {
      const container = document.querySelector('.container');
      const rect = this.rightPrimaryLayoutRef.current.getBoundingClientRect();
      if (container) {
        container.scroll({ top: rect.top, behavior: 'smooth' });
      }
    }
  }

  render() {
    const {
      children,
      collapsed,
      fixedHeader,
      logo,
      currentUser,
      totalNotReadMessage,
      // siteName,
      theme
    } = this.props;
    const headerProps = {
      logo,
      collapsed,
      theme
    };

    return (
      <Layout>
        <Head>
          <link
            href="https://unpkg.com/video.js@7.8.3/dist/video-js.css"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/video.js@7.8.3/dist/video.js" />
          <script src="https://unpkg.com/@videojs/http-streaming@1.13.3/dist/videojs-http-streaming.js" />
        </Head>
        <div
          className="container"
          style={{ paddingTop: fixedHeader ? 72 : 0 }}
          id="primaryLayout"
        >
          <Header {...headerProps} />
          <Layout.Content className="content">
            <div className="primary-content">
              <Row gutter={10}>
                <Col xs={24} sm={4}>
                  {currentUser?._id && currentUser?.role === 'performer' && (
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Button
                        type="primary"
                        className="btn-live"
                        onClick={this.onLive.bind(this)}
                      >
                        Go Live
                      </Button>
                      <SideMenu
                        menus={performerSettingMenu}
                        totalNotReadMessage={totalNotReadMessage}
                      />
                    </Space>
                  )}
                  {currentUser?._id && currentUser?.role === 'user' && (
                    <SideMenu
                      menus={userSettingMenu}
                      totalNotReadMessage={totalNotReadMessage}
                    />
                  )}
                  {currentUser?._id && currentUser?.role === 'studio' && (
                    <>
                      <div className="tk-studio">
                        <div className="stat">
                          <span>Total models</span>
                          <span>{currentUser.stats.totalPerformer || 0}</span>
                        </div>
                        <div className="stat">
                          <span>Total earned</span>
                          <span>
                            <NumberFormat
                              value={currentUser.stats.totalTokenEarned || 0}
                            />
                          </span>
                        </div>
                        <div className="stat">
                          <span>Total sessions</span>
                          <span>{currentUser.stats.totalOnlineToday || 0}</span>
                        </div>
                        <div className="stat">
                          <span>Total hours online</span>
                          <span>
                            {currentUser.stats.totalHoursOnline
                              && converDuration(
                                currentUser.stats.totalHoursOnline
                              )}
                          </span>
                        </div>
                      </div>
                      <SideMenu
                        menus={studioSettingMenu}
                        // totalNotReadMessage={totalNotReadMessage}
                      />
                    </>
                  )}
                </Col>
                <Col
                  xs={24}
                  sm={20}
                  className="right-primary-layout"
                  ref={this.rightPrimaryLayoutRef}
                >
                  {children}
                </Col>
              </Row>
            </div>
          </Layout.Content>
          <Footer />
          <BackTop
            className="backTop"
            target={() => document.querySelector('#primaryLayout') as HTMLElement}
          />
        </div>
      </Layout>
    );
  }
}

const userSelecter = (state) => state.user.current;
const performerSelecter = (state) => state.performer.current;
const studioSelecter = (state) => state.studio.current;
const authSelecter = (state) => state.auth;

const currentUserSelecter = createSelector(
  userSelecter,
  performerSelecter,
  studioSelecter,
  authSelecter,
  (user, performer, studio, auth) => {
    if (!auth.loggedIn) return {};

    if (user?._id) {
      return { ...user, role: 'user' };
    }

    if (performer?._id) {
      return { ...performer, role: 'performer' };
    }

    if (studio?._id) {
      return { ...studio, role: 'studio' };
    }

    return {};
  }
);

const mapStateToProps = (state: any) => ({
  ...state.ui,
  ...state.auth,
  totalNotReadMessage: state.message.totalNotReadMessage,
  currentUser: currentUserSelecter(state)
});
const mapDispatchToProps = { loadUIValue };

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryLayout);
