/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { IVideo } from 'src/interfaces';
import {
  Form,
  Input,
  Button,
  Space,
  Select,
  Row,
  Col,
  Upload,
  Checkbox,
  Divider
} from 'antd';
import Router from 'next/router';
import { UploadOutlined } from '@ant-design/icons';
import { formItemLayout, tailFormItemLayout, unitPrices } from 'src/lib';
import FormInputItem from '@components/common/base/input-item-list';
import { FormItemProps } from 'antd/lib/form/FormItem';
import NumberFormat from '@components/common/layout/numberformat';
import './index.less';

interface IProps {
  video?: IVideo;
  onFinish(data: any): Function;
  loading: boolean;
}

const imageStyle: React.CSSProperties = {
  height: 225,
  width: 225,
  objectFit: 'cover',
  marginTop: 10
};

const defaultValue: IVideo = {
  description: '',
  isSaleVideo: false,
  isBought: false
};

const { Option } = Select;

const PERFORMER_VIDEO_STATUS = [
  { key: 'draft', name: 'Draft' },
  { key: 'active', name: 'Active' },
  { key: 'inactive', name: 'Inactive' }
];

const leftInputFrom: FormItemProps[] = [
  {
    name: 'title',
    label: 'Title',
    rules: [
      {
        required: true,
        message: 'Please input video title!'
      }
    ],
    children: <Input placeholder="Enter Video Title" />
  },
  {
    name: 'description',
    label: 'Description',
    children: <Input.TextArea placeholder="Enter Video Description" />
  }
];

const VideoForm = ({ onFinish, loading, video }: IProps) => {
  let inputRef;
  let selectRef;
  const [form] = Form.useForm();
  if (video?.token && !unitPrices.find((p) => p.value === video.token)) {
    unitPrices.push({ value: video.token, text: <NumberFormat value={video.token} suffix=" tokens" /> });
    unitPrices.sort((a, b) => a.value - b.value);
  }
  const [tokens, setTokenPrice] = React.useState(unitPrices);
  const [isSaleVideo, setIsSaleVideo] = React.useState(video.isSaleVideo);
  const [thumbnailFile, setThumbnail] = React.useState(video.thumbnail || '');
  const priceSelectOptions = tokens.map((price) => ({
    label: price.text,
    value: price.value
  }));
  const rightInputFrom: FormItemProps[] = [
    {
      name: 'token',
      label: 'Token',
      rules: [
        {
          required: true,
          message: 'Please input video token!'
        },
        {
          validator: (_, value) => new Promise((resolve, reject) => {
            if (parseInt(value, 10) > 0) return resolve(null);
            return reject(new Error('Price must be positive integer number!'));
          })
        }
      ],
      children: (
        <Select
          ref={(ref) => (selectRef = ref)}
          placeholder="Please Select Number of Token"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              return e.preventDefault();
            }
            return {};
          }}
          options={priceSelectOptions}
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider dashed />
              <Input
                placeholder="Input number of token"
                type="number"
                min={1}
                ref={(ref) => (inputRef = ref)}
                onPressEnter={() => {
                  let token = parseInt(inputRef.state.value, 10);
                  if (token < 1) token = 1;
                  setTimeout(() => {
                    form.setFieldsValue({ token });
                  }, 100);

                  if (tokens.find((t) => t.value === token)) return;

                  setTokenPrice(
                    [
                      ...tokens,
                      {
                        text: `${token} tokens`,
                        value: token
                      }
                    ].sort((a, b) => a.value - b.value)
                  );
                }}
              />
            </>
          )}
        />
      )
    },
    {
      name: 'status',
      label: 'Status',
      rules: [
        {
          required: true,
          message: 'Please input video status!'
        }
      ],
      children: (
        <Select placeholder="Select Video Status">
          {PERFORMER_VIDEO_STATUS.map((status) => (
            <Option key={status.key} value={status.key}>
              {status.name}
            </Option>
          ))}
        </Select>
      )
    }
  ];
  const [videoFIle, setVideoFile] = React.useState([]);
  const [trailerFile, setTrailerFile] = React.useState([]);
  const onVideoFileChange = ({ file }) => {
    setVideoFile([{ ...file, status: 'success', percent: 100 }]);
  };
  const onVideoTrailerChange = ({ file }) => {
    setTrailerFile([{ ...file, status: 'success', percent: 100 }]);
  };
  const onThumbnailChange = (info) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setThumbnail(e.target.result as string);
    };
    reader.readAsDataURL(info.fileList[0].originFileObj);
  };

  return (
    <Form
      // {...formItemLayout}
      form={form}
      onFinish={onFinish}
      className="video-form"
      initialValues={{
        ...defaultValue,
        ...video
      }}
      layout="vertical"
    >
      <Row gutter={25}>
        <Col sm={12} xs={24}>
          <FormInputItem fields={leftInputFrom} />

          <Form.Item
            name="video"
            label="Video"
            rules={[{ required: true, message: 'File is required' }]}
          >
            <Upload
              showUploadList={{
                showRemoveIcon: false,
                showPreviewIcon: true,
                showDownloadIcon: false
              }}
              listType="picture"
              fileList={videoFIle}
              accept="video/*"
              customRequest={() => true}
              onChange={onVideoFileChange}
            >
              <Button block>
                <UploadOutlined />
                {' '}
                Upload File
              </Button>
            </Upload>
          </Form.Item>
          {video?.video?.url && (
            <Form.Item>
              <video src={video.video.url} style={imageStyle} controls />
            </Form.Item>
          )}
          <Form.Item name="trailer" label="Trailer">
            <Upload
              showUploadList={{
                showRemoveIcon: false,
                showPreviewIcon: true,
                showDownloadIcon: false
              }}
              listType="picture"
              fileList={trailerFile}
              accept="video/*,.mkv"
              customRequest={() => true}
              onChange={onVideoTrailerChange}
            >
              <Button block>
                <UploadOutlined />
                {' '}
                Upload File
              </Button>
            </Upload>
          </Form.Item>
          {video?.trailer?.url && (
            <Form.Item>
              <video src={video.trailer.url} style={imageStyle} controls />
            </Form.Item>
          )}
          <Form.Item name="thumbnail" label="Thumbnail">
            <Upload
              showUploadList={false}
              accept="image/*"
              customRequest={() => true}
              onChange={onThumbnailChange}
            >
              <Button block>
                <UploadOutlined />
                {' '}
                Upload File
              </Button>
              <div>
                {thumbnailFile && (
                  <img src={thumbnailFile} style={imageStyle} alt="" />
                )}
              </div>
            </Upload>
          </Form.Item>
        </Col>
        <Col sm={12} xs={24}>
          <Form.Item {...rightInputFrom[1]} />
          <Form.Item name="isSaleVideo" required>
            <Checkbox
              checked={isSaleVideo}
              onChange={(e) => [
                setIsSaleVideo(!isSaleVideo),
                form.setFieldsValue({ isSaleVideo: !isSaleVideo })
              ]}
            >
              Is for sale?
            </Checkbox>
          </Form.Item>
          {isSaleVideo && <Form.Item {...rightInputFrom[0]} />}
        </Col>
      </Row>
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
VideoForm.defaultProps = {
  video: null
};

export default VideoForm;
