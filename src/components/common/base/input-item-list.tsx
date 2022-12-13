import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form/FormItem';
import React from 'react';

interface IFormInputItem {
  fields: FormItemProps[];
}

export default ({ fields }: IFormInputItem) => (
  <>
    {fields.map((field) => (
      <Form.Item {...field} key={field.id || (field.name || field.fieldKey).toString()}>
        {field.children}
      </Form.Item>
    ))}
  </>
);
