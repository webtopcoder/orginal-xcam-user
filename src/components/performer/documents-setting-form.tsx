import React from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IPerformer } from 'src/interfaces';
import { performerService } from 'src/services';
import { TOKEN } from 'src/services/api-request';
import cookie from 'js-cookie';

import './index.less';

interface IProps {
  performer: IPerformer;
  onFinish(data: any): Function;
  loading: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};

const DocumentsSettingForm = ({ onFinish, loading, performer }: IProps) => {
  const [idVerification, setIdVerification] = React.useState([]);
  const [documentVerification, setDocumentVerification] = React.useState([]);
  const [releaseForm, setRelaseForm] = React.useState([]);
  const [idVerificationId, setIdVerificationId] = React.useState(
    performer.idVerificationId
  );
  const [documentVerificationId, setDocumentVerificationId] = React.useState(
    performer.documentVerificationId
  );
  const [releaseFormId, setReleaseFormId] = React.useState(
    performer.releaseFormId
  );
  const [form] = Form.useForm();

  React.useEffect(() => {
    const { idVerification: idVerificationFile, documentVerification: documentVerificationFile, releaseForm: releaseFormFile } = performer;
    if (idVerificationFile) {
      setIdVerification([
        {
          uid: idVerificationFile._id,
          name: idVerificationFile.name,
          status: 'done',
          url: idVerificationFile.url
        }
      ]);
    }

    if (documentVerificationFile) {
      setDocumentVerification([
        {
          uid: documentVerificationFile._id,
          name: documentVerificationFile.name,
          status: 'done',
          url: documentVerificationFile.url
        }
      ]);
    }

    if (releaseFormFile) {
      setRelaseForm([
        {
          uid: releaseFormFile._id,
          name: releaseFormFile.name,
          status: 'done',
          url: releaseFormFile.url
        }
      ]);
    }
  }, []);

  const onDocumentVerificationChange = ({ file, fileList }) => {
    if (file.status === 'done' && file.response) {
      const { data } = file.response;
      setDocumentVerificationId(data._id);
      setDocumentVerification([
        {
          uid: data._id,
          name: data.name,
          status: 'done',
          url: data.url
        }
      ]);
    } else {
      setDocumentVerification(fileList);
    }
  };

  const onIdVerificationChange = ({ file, fileList }) => {
    if (file.status === 'done' && file.response) {
      const { data } = file.response;
      setIdVerificationId(data._id);
      setIdVerification([
        {
          uid: data._id,
          name: data.name,
          status: 'done',
          url: data.url
        }
      ]);
    } else {
      setIdVerification(fileList);
    }
  };

  const onReleaseFormChange = ({ file, fileList }) => {
    if (file.status === 'done' && file.response) {
      const { data } = file.response;
      setReleaseFormId(data._id);
      setRelaseForm([
        {
          uid: data._id,
          name: data.name,
          status: 'done',
          url: data.url
        }
      ]);
    } else {
      setRelaseForm(fileList);
    }
  };

  const submit = () => {
    onFinish({
      idVerificationId,
      documentVerificationId,
      releaseFormId
    });
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={submit}
      name="documentSettingForm"
      className="performerEditForm"
      initialValues={{
        documentVerificationId: performer.documentVerificationId,
        idVerificationId: performer.idVerificationId
      }}
      layout="vertical"
    >
      <Form.Item
        name="documentVerification"
        rules={[
          {
            validator: () => {
              if (idVerificationId) return Promise.resolve();
              return Promise.reject(new Error('Verification document is required!'));
            }
          }
        ]}
      >
        <Upload
          showUploadList={{
            showPreviewIcon: true,
            showRemoveIcon: false,
            showDownloadIcon: true
          }}
          name="file"
          headers={{
            Authorization: process.browser ? cookie.get(TOKEN) : ''
          }}
          disabled={loading}
          fileList={documentVerification}
          listType="picture"
          action={performerService.getDocumentsUploadUrl()}
          onChange={onDocumentVerificationChange}
        >
          <Button type="primary">
            <UploadOutlined />
            {' '}
            Upload Document For Verification
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="idVerification"
        rules={[
          {
            validator: () => {
              if (idVerificationId) return Promise.resolve();
              return Promise.reject(new Error('Id Verification is required'));
            }
          }
        ]}
      >
        <Upload
          showUploadList={{
            showPreviewIcon: true,
            showRemoveIcon: false,
            showDownloadIcon: true
          }}
          name="file"
          headers={{
            Authorization: process.browser ? cookie.get(TOKEN) : ''
          }}
          fileList={idVerification}
          listType="picture"
          disabled={loading}
          action={performerService.getDocumentsUploadUrl()}
          onChange={onIdVerificationChange}
        >
          <Button type="primary">
            <UploadOutlined />
            Upload Id Verification
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item name="releaseForm">
        <Upload
          showUploadList={{
            showPreviewIcon: true,
            showRemoveIcon: false,
            showDownloadIcon: true
          }}
          name="file"
          headers={{
            Authorization: process.browser ? cookie.get(TOKEN) : ''
          }}
          fileList={releaseForm}
          listType="text"
          action={performerService.getReleaseFormUrl()}
          onChange={onReleaseFormChange}
          disabled={loading}
        >
          <Button type="primary">
            <UploadOutlined />
            Upload Release Form
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={loading} loading={loading}>
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DocumentsSettingForm;
