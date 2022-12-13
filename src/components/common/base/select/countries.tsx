import React from 'react';
import { Select } from 'antd';
import { ICountries } from 'src/interfaces';

interface IProps {
  autoFocus?: boolean;
  disabled?: boolean;
  mode?: 'multiple' | 'tags';
  onChange?: Function;
  defaultValue: string;
  countries: ICountries[];
}

const { Option } = Select;

const filter = (value, option): boolean => option.children.toLowerCase().indexOf(value.toLowerCase()) > -1;

const CountriesSelect = ({
  defaultValue, onChange, countries, ...props
}: IProps) => {
  const [value, setValue] = React.useState(defaultValue);
  const handleSelectChange = (v) => {
    setValue(v);
    onChange && onChange(v);
  };

  return (
    <Select
      {...props}
      value={value}
      onChange={handleSelectChange}
      showSearch
      filterOption={filter}
      placeholder="Select your counties"
    >
      {countries.map((country: ICountries) => (
        <Option key={country.code} value={country.code}>
          {country.name}
        </Option>
      ))}
    </Select>
  );
};

CountriesSelect.defaultProps = {
  autoFocus: false,
  disabled: false,
  mode: '',
  onChange: null
};

export default CountriesSelect;
