export interface ISearch {
  q?: string;
  limit?: number;
  offset?: number;
  sortBy?: string;
  sort?: string;
}

export interface IResponse<T> {
  data: T;
  status: number;
}

export interface IDataResponse<T> {
  data: T[];
  total: number;
}

export interface ICountry {
  name: string;
  code: string;
  flag: string;
}

export interface ILangguges {
  name: string;
  code: string;
}

export interface IPhoneCodes {
  name: string;
  code: string;
  dialCode: string;
}

export interface IStats {
  views?: number;
  favorites?: number;
  totalVideos?: number;
  totalPhotos?: number;
  totalGalleries?: number;
  totalProducts?: number;
  totalStreamTime?: number;
  totalTokenEarned: number;
  totalTokenSpent: number;
  totalPerformer?: number;
  totalHoursOnline?: number;
  totalOnlineToday?: number;
}
