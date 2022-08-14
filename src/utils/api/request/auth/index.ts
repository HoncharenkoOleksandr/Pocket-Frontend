import { AxiosRequestConfig } from 'axios';

import { apiRoutes } from '@utils/constants';

import { UserFromModel } from '../../../../pages/SignUp/components';
import { api } from '../../instance';

export interface AuthParam {
  param: 'signup' | 'login';
  data: UserFromModel;
  config?: AxiosRequestConfig;
}

export interface SignUpResponse {
  msg: string;
  userId: string;
  userName: string;
}

export interface LoginResponse {
  user: {
    id: string;
    username: string;
  };
  msg: string;
}

type RequestAuthFormType = SignUpResponse | LoginResponse | undefined;

export const requestAuthForm = ({ param, data, config }: AuthParam): Promise<RequestAuthFormType> =>
  api.post(`${apiRoutes.users}/${param}`, data, { ...config });
