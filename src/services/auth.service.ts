import cookie from 'js-cookie';
import {
  ILogin,
  IperformerLogin,
  IRegisterFormData,
  IUserRegisterFormData
} from 'src/interfaces';
import {
  APIRequest, TOKEN, IResponse, ROLE
} from './api-request';

export class AuthService extends APIRequest {
  login(data: ILogin) {
    return this.post('/auth/users/login', data);
  }

  setAuthHeader(token: string, role: string) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    cookie.set(TOKEN, token, { expires: 365 });
    cookie.set(ROLE, role, { expires: 365 });
    this.setAuthHeaderToken(token);
  }

  performerLogin(data: IperformerLogin) {
    return this.post('/auth/performers/login', data);
  }

  studioLogin(data: ILogin) {
    return this.post('/auth/studio/login', data);
  }

  setToken(token: string): void {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    cookie.set(TOKEN, token, { expires: 365 });
    this.setAuthHeaderToken(token);
  }

  getToken(): string {
    const token = cookie.get(TOKEN);
    return token || null;
  }

  getRole(): string {
    const role = cookie.get(ROLE);
    return role || null;
  }

  removeToken(): void {
    cookie.remove(TOKEN);
    cookie.remove(ROLE);
  }

  removeRemember(): void {
    process.browser && cookie.remove('rememberMe');
  }

  updatePassword(body: { password: string; source?: string }) {
    return this.put('/auth/users/me/password', body);
  }

  performersRegister(data: IRegisterFormData): Promise<any> {
    return this.register('/auth/performers/register', data);
  }

  userRegister(data: IUserRegisterFormData): Promise<IResponse<any>> {
    return this.post('/auth/users/register', data);
  }

  studioRegister(data: IRegisterFormData): Promise<any> {
    return this.register('/auth/studio/register', data);
  }

  forgotPassword(email: string, type: string) {
    const data = {
      email,
      type
    };
    return this.post('/auth/users/forgot', data);
  }

  resendVerificationEmail(data: { email: string, source: string}) {
    return this.post('/verification/resend-verification-email', data);
  }
}

export const authService = new AuthService();
