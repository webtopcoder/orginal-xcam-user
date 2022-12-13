export interface IUIConfig {
  collapsed: boolean;
  theme: string;
  siteName: string;
  logo: string;
  fixedHeader: boolean;
  placeholderLoginUrl: string;
  placeholderAvatarUrl: string;
  menus: IMenu[];
  footerContent: string;
  maintenanceMode: boolean;
  singularTextModel: string;
  pluralTextModel: string;
  googleReCaptchaSiteKey: string;
  googleReCaptchaEnabled: boolean;
}

export interface IMenu {
  _id: string;
  section: string;
  path: string;
  title: string;
  isOpenNewTab: boolean;
  internal: boolean;
}
