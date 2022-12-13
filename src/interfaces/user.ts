import { ISearch, IStats } from './utils';

export interface IUser {
  _id: string;
  avatar: string;
  username?: string;
  name: string;
  email: string;
  gender?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  roles?: Array<string>;
  role?: string;
  phone?: string;
  city?: string;
  state?: string;
  timezone?: string;
  dateOfBirth?: Date;
  balance: number;
  isPerformer?: boolean;
  stats?: IStats;
}

export interface IUserSearch extends ISearch {
  role?: string;
}
