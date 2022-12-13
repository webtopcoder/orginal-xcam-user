/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { sendMessage, sentFileSuccess } from '@redux/message/actions';
import { SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';
// import { ImageMessageUpload } from '@components/messages/uploadPhoto';
// import { authService } from '@services/index';
import Emotions from './emotions';
import '../stream-chat/Compose.less';

interface IProps {
  sendMessage: Function;
  sentFileSuccess: Function;
  sendMessageStatus: any;
  conversation: any;
  currentUser: any
}

class Compose extends PureComponent<IProps> {
  uploadRef: any;

  _input: any;

  constructor(props) {
    super(props);
    this.uploadRef = React.createRef();
  }

  state = { text: '' };

  componentDidMount() {
    if (!this.uploadRef) this.uploadRef = React.createRef();
    if (!this._input) this._input = React.createRef();
  }

  componentDidUpdate(previousProps: IProps) {
    const { sendMessageStatus } = this.props;
    if (sendMessageStatus.success !== previousProps.sendMessageStatus.success) {
      this.setMessage('');
      this._input && this._input.focus();
    }
  }

  setMessage(msg: string) {
    this.setState({ text: msg });
  }

  onKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      this.send();
    }
  };

  onChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  onEmojiClick = (emojiObject) => {
    const { text } = this.state;
    this.setMessage(text + emojiObject.emoji);
  }

  onPhotoUploaded = (data: any) => {
    const { sentFileSuccess: handleSendFile } = this.props;
    if (!data || !data.response) {
      return;
    }
    const imageUrl = (data.response.data && data.response.data.imageUrl) || data.base64;
    handleSendFile({ ...data.response.data, ...{ imageUrl } });
  }

  send() {
    const { text } = this.state;
    if (!text) return;
    const { conversation, sendMessage: handleSend } = this.props;
    handleSend({
      conversationId: conversation._id,
      data: {
        text
      }
    });
  }

  render() {
    const { text } = this.state;
    const { sendMessageStatus: status, conversation } = this.props;
    // const uploadHeaders = {
    //   authorization: authService.getToken()
    // };
    if (!this.uploadRef) this.uploadRef = React.createRef();
    if (!this._input) this._input = React.createRef();
    return (
      <div className="compose">
        <Input
          value={text}
          className="compose-input"
          placeholder="Type a message"
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          disabled={status.sending || !conversation._id}
          ref={(c) => this._input = c}
        />
        <div className="grp-icons">
          <SendOutlined onClick={this.send.bind(this)} disabled={status.sending} style={{ fontSize: '25px', marginRight: '10px', color: '#fe26b3' }} />
          <div className="grp-emotions">
            <img src="/emotion-ico.png" width="25px" alt="" />
            <Emotions onEmojiClick={this.onEmojiClick.bind(this)} />
          </div>
        </div>

        {/* <div className="grp-icons">
          <div className="grp-file-icon">
            <ImageMessageUpload
              headers={uploadHeaders}
              uploadUrl={messageService.getMessageUploadUrl()}
              onUploaded={this.onPhotoUploaded}
              options={{ fieldName: 'message-photo' }}
              messageData={{
                text: 'sent a photo',
                conversationId: conversation && conversation._id,
                recipientId: conversation && conversation.recipientInfo && conversation.recipientInfo._id,
                recipientType: currentUser && currentUser._id ? 'performer' : 'user'
              }}
            />
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStates = (state: any) => ({
  sendMessageStatus: state.message.sendMessage,
  currentUser: state.user.current
});

const mapDispatch = { sendMessage, sentFileSuccess };
export default connect(mapStates, mapDispatch)(Compose);
