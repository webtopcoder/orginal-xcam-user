import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Loader from '../base/loader';
import './page.less';

interface IProps {
  loading?: boolean;
  className?: string;
  inner?: boolean;
}

export default class Page extends PureComponent<IProps> {
  render() {
    const {
      className, children, loading = false, inner = true
    } = this.props;
    const loadingStyle = {
      height: 'calc(100vh - 184px)',
      overflow: 'hidden'
    };
    return (
      <div
        className={classnames(className, {
          contentInner: inner
        })}
        style={loading ? loadingStyle : null}
      >
        {loading ? <Loader spinning /> : ''}
        {children}
      </div>
    );
  }
}
