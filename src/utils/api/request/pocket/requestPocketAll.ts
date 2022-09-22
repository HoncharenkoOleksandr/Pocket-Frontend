import { AxiosRequestConfig } from 'axios';

import { apiRoutes } from '@utils';

import { api } from '../../instance';

export const requestPocketAll = ({ data, config }: any): Promise<any> =>
  api.post(`${apiRoutes.pocket.all}`, data, { ...config });
