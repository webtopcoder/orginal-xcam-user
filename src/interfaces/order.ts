export interface IOrder {
  _id: string;
  buyerSource: string;
  buyerId: string;
  buyerInfo?: any;
  sellerSource: string;
  sellerId: string;
  sellerInfo?: any;
  name: string;
  description: string;
  orderNumber: string;
  shippingCode: string;
  payBy: string;
  quantity: number;
  totalPrice: number;
  deliveryAddress?: string;
  deliveryStatus: string;
  postalCode?: string;
  productType?: string;
  productId?: string;
  createdAt: Date;
  updatedAt: Date;
  productsInfo:any;
}
