import React from 'react';
import { Dropdown, Menu, message } from 'antd';
import { DownOutlined, StopOutlined } from '@ant-design/icons';
import { IPerformer, IUser } from 'src/interfaces';
import { connect } from 'react-redux';
import { getResponseError } from '@lib/utils';
import { performerService } from '@services/perfomer.service';

interface P {
  loggedIn: Boolean;
  members: Array<IUser>;
  currentPerformer: IPerformer;
  placeholderAvatarUrl: string;
}

const StreamingChatUsers = ({
  loggedIn,
  members,
  currentPerformer,
  placeholderAvatarUrl
}: P) => {
  const blockUser = React.useCallback(async ({ key }) => {
    if (!window.confirm('Are you sure to block this user?')) return;
    try {
      await performerService.geoBlock({ userIds: [key] });
    } catch (e) {
      const error = await Promise.resolve(e);
      message.error(getResponseError(error));
    }
  }, [members]);
  return (
    <div className="conversation-users">
      <div className="users">
        {members.length > 0
        && members.map((m) => (
          <div className="user" key={m._id}>
            {loggedIn && currentPerformer && currentPerformer._id ? (
              <Dropdown
                overlay={(
                  <Menu>
                    <Menu.Item onClick={blockUser} key={m._id}>
                      <span>
                        <StopOutlined size={16} />
                        {' '}
                        Block this user
                      </span>
                    </Menu.Item>
                  </Menu>
                )}
                placement="bottomLeft"
                trigger={['hover', 'click']}
              >
                <span className="username">
                  <img
                    alt="avatar"
                    src={m?.avatar || placeholderAvatarUrl}
                    width="35px"
                    style={{ borderRadius: '50%', marginRight: '5px' }}
                  />
                  {m.username}
                  {' '}
                  <DownOutlined />
                </span>
              </Dropdown>
            ) : (
              <span className="username">
                <img
                  alt="avatar"
                  src={m?.avatar || '/default-user-icon.png'}
                  width="35px"
                  style={{ borderRadius: '50%', marginRight: '5px' }}
                />
                {m.username}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStates = (state: any) => ({
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl
});
export default connect(mapStates)(StreamingChatUsers);
