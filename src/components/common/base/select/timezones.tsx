import React from 'react';
import { Select, message } from 'antd';
import { settingService } from 'src/services';
import { IResponse } from '@services/api-request';
import { getResponseError } from '@lib/utils';

interface IProps {
  autoFocus?: boolean;
  disabled?: boolean;
}

const { Option } = Select;
const filter = (value, option): boolean => option.children.toLowerCase().indexOf(value.toLowerCase()) > -1;
const TimezonesSelect = ({ ...props }: IProps) => {
  const [timezones, setTimezones] = React.useState([]);
  React.useEffect(() => {
    const getTimezoneList = async () => {
      try {
        const resp: IResponse<string[]> = await settingService.getTimezones();
        setTimezones(resp.data);
      } catch (e) {
        const err = await Promise.resolve(e);
        message.error(getResponseError(err));
      }
    };
    getTimezoneList();
  }, []);
  return (
    <Select
      {...props}
      showSearch
      filterOption={filter}
      placeholder="Select your timezone"
    >
      {timezones.length > 0
        && timezones.map((zone) => (
          <Option key={zone} value={zone}>
            {zone}
          </Option>
        ))}
    </Select>
  );
};
TimezonesSelect.defaultProps = {
  autoFocus: false,
  disabled: false

};

export default TimezonesSelect;
