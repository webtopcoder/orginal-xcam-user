export interface IRefundRequest {
  _id: string;
  userId: string;
  sourceType?: string;
  sourceId: string;
  token: number;
  performerId: string;
  description: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
