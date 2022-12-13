export interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}

export interface IperformerLogin {
  username: string;
  password: string;
  remember?: boolean;
}

export interface UploadFile {
  file: {
    originFileObj: File;
  };
}

export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  country: string;
  dateOfBirth: string;
  gender: string;
  documentVerification: UploadFile;
  idVerification: UploadFile;
}

export interface IStudioRegisterFormData {
  name: string;
  username: string;
  password: string;
  email: string;
  country: string;
}

export interface IUserRegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  country: string;
  dateOfBirth: string;
  gender: string;
}

export interface IUserUpdateFormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  country: string;
  dateOfBirth: string;
  gender: string;
  avatar: string;
  phone?: string;
}

export interface IForgotPasswordFormData {
  type: string;
  email: string;
}

export interface IUpdatePasswordFormData {
  password: string;
  userId?: string;
  source?: string;
}
