import {
  IPerformerPaymentInfo,
  IPerformerDirectDeposit,
  IPerformerPaxum,
  IPerformerBitpay
} from '.';
import { IStats } from './utils';

export interface IStudioLogin {
  email: string;
  password: string;
}

export interface IStudio {
  _id: string;
  avatar: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  username?: string;
  email?: string;
  status?: string;
  phone?: string;
  country?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  address?: string;
  languages?: string[];
  roles?: string[];
  timezone?: string;
  bankTransferOption?: IPerformerPaymentInfo;
  directDeposit?: IPerformerDirectDeposit;
  paxum?: IPerformerPaxum;
  bitpay?: IPerformerBitpay;
  createdAt?: Date;
  updatedAt?: Date;
  balance?: number;
  emailVerified?: boolean;
  minPayment: number;
  swiftCode: string;
  address1: string;
  address2: string;
  payoneer: string;
  paypal: string;
  certificate: string;
  stats?: IStats;
  documentVerificationId?: string;
  documentVerification?: any;
  role?: string;
  commission?: number;
  grossPrice?: number;
  netPrice?: number;
  payoutStatus?: string;
}
