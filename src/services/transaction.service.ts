import { APIRequest } from './api-request';

export class TransactionService extends APIRequest {
  search(params?: { [key: string]: any }) {
    return this.get(this.buildUrl('/transactions/user/search', params));
  }

  sendTipToken(performerId: string, token: number, conversationId?: string) {
    return this.post(`/member/send-tip-token/${performerId}`, { token, conversationId });
  }

  public sendPaidToken(conversationId: string) {
    return this.post(`/member/send-pay-token/${conversationId}`);
  }
}

export const transactionService = new TransactionService();
