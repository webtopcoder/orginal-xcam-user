import { Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { PureComponent } from 'react';
import { RcFile } from 'antd/lib/upload';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

interface IState {
  loading: boolean;
  imageUrl: string;
}

interface IProps {
  imageUrl?: string;
  uploadUrl?: string;
  headers?: any;
  onUploaded?: Function;
  options?: any;
  beforeUpload?: (file: RcFile) => boolean;
}

export class ImageUpload extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { imageUrl } = this.props;
    this.state = {
      loading: false,
      imageUrl
    };
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.fileList[0].originFileObj, (imageUrl) => {
        this.setState({
          imageUrl,
          loading: false
        });
        const { onUploaded } = this.props;
        onUploaded
          && onUploaded({
            response: info.file.response,
            base64: imageUrl
          });
      });
    }
  };

  render() {
    const { options = {}, beforeUpload } = this.props;
    const { loading } = this.state;

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    const { headers, uploadUrl } = this.props;
    return (
      <Upload
        name={options.fieldName || 'file'}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={uploadUrl}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        headers={headers}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="file" style={{ width: '100%', height: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}
