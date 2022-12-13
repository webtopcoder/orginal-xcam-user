import React, { PureComponent, ReactNode } from 'react';
import { Modal, Button } from 'antd';
import { ModalFuncProps } from 'antd/lib/modal/Modal';
import './popup.less';

interface IState {
  visible: boolean;
}

interface IProps extends ModalFuncProps {
  footer?: ReactNode[];
  loading?: boolean;
  onOK?: Function;
  onCancel?: any;
}

class Popup extends PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onOk() {
    const { onOk } = this.props;
    onOk && onOk();
  }

  onCancel() {
    const { onCancel } = this.props;
    onCancel && onCancel();
    this.setState({ visible: false });
  }

  setVisible(visible: boolean) {
    this.setState({ visible });
  }

  render() {
    const { visible } = this.state;
    const {
      content, loading, okText, cancelText, okButtonProps
    } = this.props;
    let { footer } = this.props;
    if (footer) {
      footer = [
        <Button key="back" type="default" onClick={this.onCancel.bind(this)}>
          {cancelText || 'Cancel'}
        </Button>,
        ...footer,
        <Button key="submit" type="primary" onClick={this.onOk.bind(this)} loading={loading} {...okButtonProps}>
          {okText || 'OK'}
        </Button>
      ];
    } else {
      footer = [
        <Button key="back" type="default" onClick={this.onCancel.bind(this)}>
          {cancelText || 'Cancel'}
        </Button>,
        <Button key="submit" type="primary" onClick={this.onOk.bind(this)} disabled={loading} loading={loading} {...okButtonProps}>
          {okText || 'OK'}
        </Button>
      ];
    }
    return (
      <Modal
        {...this.props}
        visible={visible}
        centered
        closeIcon
        className="popup"
        footer={footer}
        onCancel={this.onCancel.bind(this)}
      >
        {content}
      </Modal>
    );
  }
}
export default Popup;
