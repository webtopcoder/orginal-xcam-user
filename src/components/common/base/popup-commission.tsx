/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import {
  Button, Form, InputNumber, message, Modal
} from 'antd';
import { ModalFuncProps } from 'antd/lib/modal/Modal';
import './popup.less';

interface IState {
  visible: boolean;
}

interface IProps extends ModalFuncProps {
  loading?: boolean;
  onOK?: Function;
  onCancel?: any;
  forceRender?: any;
  submiting?: boolean;
  updatingPerformer?: any;
  onFinish: Function;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};

const validateMessages = {
  required: 'This field is required!'
};

class PopupCommission extends PureComponent<IProps, IState> {
  private formRef;

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidUpdate(prevProps: Readonly<IProps>): void {
    const { updatingPerformer } = this.props;
    if (updatingPerformer !== prevProps.updatingPerformer) {
      this.handleChange();
    }
  }

  handleChange() {
    const { updatingPerformer } = this.props;
    this.formRef.setFieldsValue({
      tipCommission: updatingPerformer.commissionSetting.tipCommission,
      privateCallCommission: updatingPerformer.commissionSetting.privateCallCommission,
      groupCallCommission: updatingPerformer.commissionSetting.groupCallCommission,
      productCommission: updatingPerformer.commissionSetting.productCommission,
      albumCommission: updatingPerformer.commissionSetting.albumCommission,
      videoCommission: updatingPerformer.commissionSetting.videoCommission
    });
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

  handleFinish(values) {
    this.props.onFinish(this.props.updatingPerformer._id, values);
  }

  render() {
    const { visible } = this.state;
    const { submiting } = this.props;
    return (
      <Modal
        {...this.props}
        visible={visible}
        centered
        closeIcon
        className="popup"
        onCancel={this.onCancel.bind(this)}
        footer={null}
      >
        <Form
          ref={(ref) => this.formRef = ref}
          layout="vertical"
          name="form-update-commission"
          onFinish={this.handleFinish.bind(this)}
          onFinishFailed={() => message.error('Please complete the required fields.')}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="tipCommission"
            label="Tip Commission"
            rules={[
              {
                validator: (_, value) => {
                  if (parseInt(value, 10) > 0 && parseInt(value, 10) < 100) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'Value must be greater than 0 and less than 100'
                    )
                  );
                }
              }
            ]}
          >
            <InputNumber min={1} max={99} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="privateCallCommission"
            label="Private Call Commission"
            rules={[
              {
                validator: (_, value) => {
                  if (parseInt(value, 10) > 0 && parseInt(value, 10) < 100) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'Value must be greater than 0 and less than 100'
                    )
                  );
                }
              }
            ]}
          >
            <InputNumber min={1} max={99} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="groupCallCommission"
            label="Group Call Commission"
            rules={[
              {
                validator: (_, value) => {
                  if (parseInt(value, 10) > 0 && parseInt(value, 10) < 100) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'Value must be greater than 0 and less than 100'
                    )
                  );
                }
              }
            ]}
          >
            <InputNumber min={1} max={99} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="productCommission"
            label="Product Sale Commission"
            rules={[
              {
                validator: (_, value) => {
                  if (parseInt(value, 10) > 0 && parseInt(value, 10) < 100) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'Value must be greater than 0 and less than 100'
                    )
                  );
                }
              }
            ]}
          >
            <InputNumber min={1} max={99} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="albumCommission"
            label="Album Sale Commission"
            rules={[
              {
                validator: (_, value) => {
                  if (parseInt(value, 10) > 0 && parseInt(value, 10) < 100) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'Value must be greater than 0 and less than 100'
                    )
                  );
                }
              }
            ]}
          >
            <InputNumber min={1} max={99} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="videoCommission"
            label="Video Sale Commission"
            rules={[
              {
                validator: (_, value) => {
                  if (parseInt(value, 10) > 0 && parseInt(value, 10) < 100) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'Value must be greater than 0 and less than 100'
                    )
                  );
                }
              }
            ]}
          >
            <InputNumber min={1} max={99} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={submiting}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default PopupCommission;
