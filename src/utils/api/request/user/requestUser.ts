import { AxiosRequestConfig } from 'axios';

import { apiRoutes } from '@utils';

import { api } from '../../instance';

export const requestUser = ({ config }: { config: AxiosRequestConfig }): Promise<any> =>
  api.get(`${apiRoutes.users.me}`, { ...config });
