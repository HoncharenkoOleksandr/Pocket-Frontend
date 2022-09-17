import { AxiosRequestConfig } from 'axios';

import { apiRoutes } from '@utils/constants';

import { api } from '../../instance';

export interface PocketParams {
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

export const requestPocketAll = ({ data, config }: AuthParam): Promise<RequestAuthForm> =>
  api.post(`${apiRoutes.pocket.all}`, data, { ...config });
