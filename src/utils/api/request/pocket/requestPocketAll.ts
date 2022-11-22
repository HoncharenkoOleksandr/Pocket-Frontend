import { AxiosRequestConfig } from 'axios';

import { apiRoutes } from '@utils';

import { api } from '../../instance';

export const requestPocketAll = ({ config }: any): Promise<any> =>
  api.get(`${apiRoutes.pocket.all}`, { ...config });
