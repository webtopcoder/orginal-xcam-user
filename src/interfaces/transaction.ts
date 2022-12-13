export interface ITransaction {
  _id: string;
  paymentGateway?: string;
  source?: string;
  sourceId?: string;
  target?: string;
  targetId: string;
  performerId?: string;
  couponInfo?: any;
  // subscription, store, etc...
  type?: string;
  totalPrice?: number;
  originalPrice?: number;
  products?: PaymentProduct[];
  paymentResponseInfo?: any;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPaymentTokenHistory {
  _id: string;
  sourceInfo?: any;
  source?: string;
  sourceId: string;
  performerId?: string;
  performerInfo?: any;
  target?: string;
  targetId?: string;
  type?: string;
  products?: PaymentProduct[];
  totalPrice?: number;
  originalPrice?: number;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
  digitalProducts?: DigitalProductResponse[];
  shippingInfo?: IShippingInfo;
}

export interface DigitalProductResponse {
  digitalFileUrl?: any;
  digitalFileId?: any;
  _id?: string;
}

export interface IShippingInfo {
  isNew?: boolean;
  createdAt?: Date;
  deliveryAddress?: string;
  deliveryStatus?: string;
  orderNumber?: '1975D62D';
  performerId?: string;
  postalCode?: number;
  productIds?: [];
  quantity?: number;
  shippingCode?: string;
  totalPrice?: number;
  transactionTokenId?: string;
  updatedAt?: Date;
  userId?: string;
  _id: string;
}

export interface PaymentProduct {
  name?: string;
  description?: string;
  price?: number;
  extraInfo?: any;
  productType?: string;
  productId?: string;
  performerId?: string;
  quantity?: number;
  tokens?: number;
}
