import { APIRequest } from './api-request';

class PaymentInformationService extends APIRequest {
  create(data) {
    return this.post('/payment-information', data);
  }

  findOne(data) {
    return this.get(this.buildUrl('/payment-information', data));
  }
}

export const paymentInformationService = new PaymentInformationService();
