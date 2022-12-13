import { ISchedule, ISearch } from '.';
import { IStats } from './utils';

export declare type GENDER = 'female' | 'male' | 'transgender';

export interface IPerformer {
  _id?: string;
  avatar?: string;
  name?: string;
  email: string;
  country: string;
  gender?: GENDER;
  sexualReference?: string;
  firstName: string;
  lastName: string;
  roles?: Array<string>;
  isFavorite: boolean;
  isBlocked?: boolean;
  bio?: string;
  tags?: string[];
  schedule?: ISchedule;
  username?: string;
  address?: string;
  zipcode?: string;
  state?: string;
  status?: string;
  phone?: string;
  city?: string;
  timezone?: string;
  dateOfBirth: Date;
  hair?: string;
  eyes?: string;
  weight?: string;
  height?: string;
  ethnicity?: string;
  pubicHair?: string;
  bust?: string;
  aboutMe?: string;
  avatarId?: string;
  avatarPath?: string;
  idVerificationId?: string;
  documentVerificationId?: string;
  releaseFormId?: string;
  idVerification?: any;
  documentVerification?: any;
  releaseForm?: any;
  languages?: string[];
  categoryIds?: string[];
  categories?: string[];
  createdAt: Date;
  products?: string[];
  videos?: string[];
  photos?: string[];
  galleries?: string[];
  relatedPerformers?: IPerformer[];
  bankTransferOption?: IPerformerPaymentInfo;
  directDeposit?: IPerformerDirectDeposit;
  paxum?: IPerformerPaxum;
  bitpay?: IPerformerBitpay;
  sessionId?: string;
  streamingStatus?: string;
  streamingTitle?: string;
  balance: number;
  isStreaming?: boolean;
  socials?: any;
  stats?: IStats;
  privateCallPrice?: number;
  groupCallPrice?: number;
  maxParticipantsAllowed?: number;
  isOnline?: number;
  lastStreamingTime?: Date;
  role?: string;
  studioId?: string;
}

export interface IPerformerDefaultPrice {
  privateCallPrice: number;
  groupCallPrice: number;
}

export interface IPerformSearch extends ISearch {
  category?: string;
  tag?: string;
  country?: string;
  gender?: string;
}

export interface IPerformerPaymentInfo {
  type: string;
  withdrawCurrency: string;
  taxPayer: string;
  bankName: string;
  bankAddress: string;
  bankCity: string;
  bankState: string;
  bankZip: string;
  bankCountry: string;
  bankAcountNumber: string;
  bankSWIFTBICABA: string;
  holderOfBankAccount: string;
  additionalInformation: string;
  payPalAccount: string;
  checkPayable: string;
  payoneer: string;
}

export interface IPerformerPaxum {
  paxumName: string;
  paxumEmail: string;
  paxumAdditionalInformation: string;
}

export interface IPerformerBitpay {
  bitpayName: string;
  bitpayEmail: string;
  bitpayAdditionalInformation: string;
}

export declare type DirectDepositAccountType = 'credit' | 'savings';

export interface IPerformerDirectDeposit {
  depositFirstName: string;
  depositLastName: string;
  accountingEmail: string;
  directBankName: string;
  accountType: DirectDepositAccountType;
  accountNumber: string;
  routingNumber: string;
}

export interface IPerformerPaymentInfoUpdate {
  // type: PaymentInfoType;
  withdrawCurrency: string;
  taxPayer: string;
  bankName: string;
  bankAddress: string;
  bankCity: string;
  bankState: string;
  bankZip: string;
  bankCountry: string;
  bankAcountNumber: string;
  bankSWIFTBICABA: string;
  holderOfBankAccount: string;
  additionalInformation: string;
  payPalAccount: string;
  checkPayable: string;
}
