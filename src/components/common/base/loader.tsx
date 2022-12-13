import React from 'react';
import classNames from 'classnames';
import './loader.less';

const Loader = ({ spinning = false, fullScreen = false }: any) => (
  <div
    className={classNames('loader', {
      hidden: !spinning,
      fullScreen
    })}
  >
    <div className="warpper">
      {/* <div className="inner" /> */}
      <div className="text"><img src="/loading-ico.gif" width="65px" alt="" /></div>
    </div>
  </div>
);

export default Loader;
