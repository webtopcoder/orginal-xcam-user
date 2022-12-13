/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { IProduct } from 'src/interfaces';
import { unitPrices, formItemLayout, tailFormItemLayout } from 'src/lib';
import {
  Form,
  Input,
  Button,
  Space,
  Select,
  Row,
  Col,
  Upload,
  Radio,
  Divider
} from 'antd';
import Router from 'next/router';
import { UploadOutlined } from '@ant-design/icons';

import FormInputItem from '@components/common/base/input-item-list';
import { FormItemProps } from 'antd/lib/form/FormItem';

import './index.less';
import NumberFormat from '@components/common/layout/numberformat';

const fileStyle: React.CSSProperties = {
  height: 'auto',
  width: 225,
  objectFit: 'cover',
  marginTop: 10
};

const renderDigitalFile = (
  digitalFile: string,
  metadata: { type?: string; name?: string }
) => {
  const { type, name } = metadata;
  if (type.match('image/*')) {
    return <img src={digitalFile} style={fileStyle} alt="" />;
  }
  if (type.match('video/*')) {
    return <video src={digitalFile} style={fileStyle} controls />;
  }
  if (type.match('audio/*')) {
    return <audio src={digitalFile} controls />;
  }
  return (
    <Button type="link" style={{ padding: 0 }}>
      {name}
    </Button>
  );
};

interface IProps {
  product?: IProduct;
  onFinish(data: any): Function;
  loading: boolean;
}

const initialValues: Partial<IProduct> = {
  description: '',
  publish: false,
  type: 'digital'
};

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
};

const leftFormItem: FormItemProps[] = [
  {
    name: 'name',
    label: 'Name',
    rules: [
      {
        required: true,
        message: 'Please input product name!'
      }
    ],
    children: <Input placeholder="Enter Product Name" />
  },
  {
    name: 'description',
    label: 'Description',
    children: <Input.TextArea placeholder="Enter Product Description" />
  },
  {
    name: 'publish',
    label: 'Publish',
    rules: [
      {
        required: true,
        message: 'Please input product name!'
      }
    ],
    children: (
      <Radio.Group>
        <Radio style={radioStyle} value key="publish">
          Yes
        </Radio>
        <Radio style={radioStyle} value={false} key="unpublish">
          No
        </Radio>
      </Radio.Group>
    )
  }
];

const ProductForm = ({ onFinish, loading, product }: IProps) => {
  let inputRef;
  let selectRef;
  const [form] = Form.useForm();
  const [image, setImage] = React.useState(product ? product.image : '');
  const [digitalFileMetaData, setDigitalFileMetaData] = React.useState([]);
  const [productType, setProductType] = React.useState(
    product?.type || 'digital'
  );
  const onImageFileChange = ({ fileList }) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result as string);
    };
    reader.readAsDataURL(fileList[0].originFileObj);
  };
  const onDigitalFileChange = ({ file }) => {
    setDigitalFileMetaData([{ ...file, status: 'success', percent: 100 }]);
  };

  if (product?.token && !unitPrices.find((p) => p.value === product.token)) {
    unitPrices.push({
      value: product.token,
      text: <NumberFormat value={product.token} suffix=" tokens" />
    });
    unitPrices.sort((a, b) => a.value - b.value);
  }
  const [tokens, setTokenPrice] = React.useState(unitPrices);
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
          message: 'Please input product token!'
        },
        {
          validator: (_, value) => new Promise((resolve, reject) => {
            if (parseInt(value, 10) > 0) return resolve(null);
            return reject(
              new Error('Price must be positive integer number!')
            );
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
      name: 'type',
      label: 'Type',
      rules: [
        {
          required: true
        }
      ],
      children: (
        <Radio.Group onChange={(e) => setProductType(e.target.value)}>
          <Radio style={radioStyle} value="digital" key="digital">
            Digital
          </Radio>
          <Radio style={radioStyle} value="physical" key="physical">
            Physical
          </Radio>
        </Radio.Group>
      )
    },
    {
      name: 'stock',
      label: 'Stock',
      rules: [
        {
          required: true,
          message: 'Please input product instock!'
        },
        {
          pattern: new RegExp(/^[1-9]\d*$/gm),
          message: 'Stock must be positve integer number'
        }
      ],
      children: <Input type="number" placeholder="Enter Product Stock" />
    }
  ];

  return (
    <Form
      form={form}
      onFinish={onFinish}
      name="productsForm"
      className="product-form"
      initialValues={{ ...initialValues, ...product }}
      layout="vertical"
    >
      <Row gutter={25}>
        <Col sm={12} xs={24}>
          <FormInputItem fields={leftFormItem} />
        </Col>
        <Col sm={12} xs={24}>
          {/* <FormInputItem fields={rightInputFrom} /> */}
          <Form.Item {...rightInputFrom[0]} />
          <Form.Item {...rightInputFrom[1]} />
          {productType === 'physical' && <Form.Item {...rightInputFrom[2]} />}
          <Form.Item name="image" label="Image File">
            <Upload
              showUploadList={false}
              accept="image/*"
              customRequest={() => true}
              onChange={onImageFileChange}
            >
              <Button type="primary">
                <UploadOutlined />
                {' '}
                Upload File
              </Button>
              <div>{image && <img src={image} style={fileStyle} alt="" />}</div>
            </Upload>
          </Form.Item>
          {productType === 'digital' && (
            <>
              <Form.Item name="digitalFile" label="Digital File">
                <Upload
                  showUploadList={{
                    showRemoveIcon: false,
                    showPreviewIcon: true,
                    showDownloadIcon: false
                  }}
                  listType="picture"
                  fileList={digitalFileMetaData}
                  customRequest={() => true}
                  onChange={onDigitalFileChange}
                >
                  <Button type="primary">
                    <UploadOutlined />
                    {' '}
                    Upload File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <div>
                  {!digitalFileMetaData.length && product?.digitalFile && (
                    <a className="upload-item-name" href={product.digitalFile} download>
                      {product.digitalFile}
                    </a>
                  )}
                </div>
              </Form.Item>
            </>
          )}
        </Col>
      </Row>
      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button
            type="primary"
            onClick={() => Router.push('/account/performer/products')}
          >
            Back
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            loading={loading}
          >
            Save Changes
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
ProductForm.defaultProps = {
  product: null
};
export default ProductForm;
