/* eslint-disable react/no-danger */
import './footer.less';
import { PureComponent } from 'react';
import Link from 'next/link';
import { Layout, Divider } from 'antd';
import { IUIConfig } from 'src/interfaces';
import { connect } from 'react-redux';
import { generateUuid } from '@lib/string';

interface IProps {
  ui: IUIConfig;
}
class Footer extends PureComponent<IProps> {
  renderMenu() {
    const { ui } = this.props;
    const { menus = [] } = ui;

    const data = [];
    if (menus.length) {
      menus.forEach((menu) => {
        const {
          path, isOpenNewTab, internal, title
        } = menu;
        const href = path || '/';
        const key = generateUuid();
        if (internal) {
          data.push(
            <Link key={key} href={href}>
              <a className="mr-8">{title}</a>
            </Link>
          );
        } else {
          data.push(
            <a
              href={href}
              key={key}
              className="mr-8"
              target={isOpenNewTab ? '_blank' : ''}
              rel="noreferrer"
            >
              {menu.title}
            </a>
          );
        }
      });
    }
    return data;
  }

  render() {
    const { ui } = this.props;
    const { siteName } = ui;
    return (
      <Layout.Footer id="layoutFooter">
        <div className="footer-custom">
          <Divider />
          {this.renderMenu()}
          {ui?.footerContent ? (
            <div dangerouslySetInnerHTML={{ __html: ui.footerContent }} />
          ) : (
            <p>
              © Copyright
              {' '}
              {siteName}
              {' '}
              {new Date().getFullYear()}
              . All Rights
              Reserved
            </p>
          )}
        </div>
      </Layout.Footer>
    );
  }
}
const mapStateToProps = (state: any) => ({
  ui: { ...state.ui }
});
const mapDispatch = {};
export default connect(mapStateToProps, mapDispatch)(Footer);
