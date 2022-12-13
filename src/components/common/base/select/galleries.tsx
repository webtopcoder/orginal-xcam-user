import React from 'react';
import { Select, message } from 'antd';
import { galleryService } from 'src/services';
import { getResponseError } from '@lib/utils';
import { IPerformerGallery } from 'src/interfaces';
import { FormInstance } from 'antd/lib/form';

interface IProps {
  autoFocus?: boolean;
  disabled?: boolean;
  // performerId?: string;
  form?: FormInstance;
  defaultGalleryId?: string;
}

const { Option } = Select;
const filter = (value, option): boolean => option.children.toLowerCase().indexOf(value.toLowerCase()) > -1;

const Galleries = ({
  autoFocus, disabled, form, defaultGalleryId
}: IProps) => {
  const [galleries, setGalleries] = React.useState([] as IPerformerGallery[]);
  const [galleryId, setGalleryId] = React.useState(defaultGalleryId);
  const getGalleryList = async (q = '') => {
    try {
      const resp = await galleryService.search({ q });
      setGalleries(resp.data.data);
    } catch (e) {
      const err = await Promise.resolve(e);
      message.error(getResponseError(err));
    }
  };
  const setInputValue = (value: string) => {
    setGalleryId(value);
    form && form.setFieldsValue({ galleryId: value });
  };

  React.useEffect(() => {
    getGalleryList();
  }, []);

  return (
    <Select
      showSearch
      autoFocus={autoFocus}
      disabled={disabled}
      filterOption={filter}
      value={galleryId}
      onChange={(value) => setInputValue(value)}
      placeholder="Select your photo gallries"
    >
      {galleries.map((gallery) => (
        <Option key={gallery._id} value={gallery._id}>
          {gallery.name}
        </Option>
      ))}
    </Select>
  );
};
Galleries.defaultProps = {
  autoFocus: false,
  disabled: false,
  // performerId: '',
  form: null,
  defaultGalleryId: ''

};

export default Galleries;
