export interface ISetting {
  _id: string;
  key: string;
  value: any;
  name: string;
  description: string;
  group: string;
  public: boolean;
  type: string;
  visible: boolean;
  meta: { [key: string]: string };
  banner: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICountries {
  code: string;
  flag: string;
  name: any;
}
