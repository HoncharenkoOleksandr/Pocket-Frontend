import { AxiosRequestConfig } from 'axios';

import { apiRoutes } from '@utils/constants';

import { SignUpFromModel } from '../../../../pages/SignUp/components';
import { api } from '../../instance';

export interface AuthParam {
  param: 'signup' | 'login';
  data: SignUpFromModel;
  config?: AxiosRequestConfig;
}

export interface SignUpResponse {
  data: {
    msg: string;
    userId: string;
    userName: string;
  };
}

export interface LoginResponse {
  data: {
    username: string;
    token: string;
  };
}

type RequestAuthForm = LoginResponse & SignUpResponse;

export const requestAuthForm = ({ param, data, config }: AuthParam): Promise<RequestAuthForm> =>
  api.post(`${apiRoutes[param]}`, data, { ...config });
