import React from 'react';
import { IUIConfig } from 'src/interfaces';

interface P {
  ui: IUIConfig;
}

export const FormRegisterPlaceHolder = ({ ui }: P) => (
  <div
    className="form-register-placeholder"
    style={
      ui?.placeholderLoginUrl
        ? { backgroundImage: `url(${ui.placeholderLoginUrl})` }
        : {}
    }
  />
);
