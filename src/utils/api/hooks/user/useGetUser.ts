import { useQuery } from 'react-query';

import { requestUser } from '../../request/user';

export const useGetUser = (settings?: any) =>
  useQuery(
    ['user'],
    (data: any) => requestUser({ data, ...(settings?.config && { config: settings.config }) }),
    settings?.options && settings.options
  );
