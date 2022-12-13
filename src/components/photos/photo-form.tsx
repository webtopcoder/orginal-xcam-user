import React from 'react';
import { IPerformerPhoto } from 'src/interfaces';
import {
  Form,
  Input,
  Button,
  Space,
  Radio,
  Upload
} from 'antd';
import Router from 'next/router';
import { UploadOutlined } from '@ant-design/icons';
import GalleiresSelect from '@components/common/base/select/galleries';
import { formItemLayout, tailFormItemLayout } from 'src/lib';
import FormInputItem from '@components/common/base/input-item-list';
import { FormItemProps } from 'antd/lib/form/FormItem';

import './index.less';

interface IProps {
  photo?: Partial<IPerformerPhoto>;
  onFinish(data: any): Function;
  loading: boolean;
}

const imageStyle: React.CSSProperties = {
  height: 225,
  width: 225,
  objectFit: 'cover',
  marginTop: 10
};

const initialValues: Partial<IPerformerPhoto> = {
  description: '',
  status: 'draft'
};

const PERFORMER_PHOTO_STATUS = [
  { key: 'draft', name: 'Draft' },
  { key: 'active', name: 'Active' },
  { key: 'inactive', name: 'Inactive' }
];

const FormPhoto = ({ onFinish, loading, photo }: IProps) => {
  const [form] = Form.useForm();
  const formInput: FormItemProps[] = [
    {
      name: 'title',
      label: 'Title',
      rules: [
        {
          required: true,
          message: 'Please input photo title!'
        }
      ],
      children: <Input placeholder="Title Photo" />
    },
    {
      name: 'galleryId',
      label: 'Gallery',
      rules: [{ required: true, message: 'please select photo gallery' }],

      children: <GalleiresSelect form={form} defaultGalleryId={photo.galleryId} />
    },
    {
      name: 'description',
      label: 'Description',
      children: <Input.TextArea placeholder="Title Description" />
    },
    {
      name: 'status',
      label: 'Status',
      children: (
        <Radio.Group>
          {PERFORMER_PHOTO_STATUS.map((status) => (
            <Radio value={status.key} key={status.key}>
              {status.name}
            </Radio>
          ))}
        </Radio.Group>
      )
    }
  ];
  const [file, setFile] = React.useState(photo.photo ? photo.photo.url : null);
  const onFileChange = (info) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFile(e.target.result as string);
    };
    reader.readAsDataURL(info.fileList[0].originFileObj);
    return false;
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      name="photoCreatingForm"
      initialValues={{
        ...initialValues,
        ...photo
      }}
      layout="vertical"
    >
      <FormInputItem fields={formInput} />
      <Form.Item name="photo" label="Photo File">
        <Upload
          showUploadList={false}
          accept="image/*"
          customRequest={() => true}
          onChange={onFileChange}
        >
          <Button>
            <UploadOutlined />
            {' '}
            Upload File
          </Button>
        </Upload>
      </Form.Item>
      {file && (
      <Form.Item>
        <img src={file} style={imageStyle} alt="" />
      </Form.Item>
      )}
      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button type="primary" htmlType="submit" disabled={loading} loading={loading}>
            Save Changes
          </Button>
          <Button type="primary" onClick={() => Router.back()}>
            Back
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
FormPhoto.defaultProps = {
  photo: null
};
export default FormPhoto;
