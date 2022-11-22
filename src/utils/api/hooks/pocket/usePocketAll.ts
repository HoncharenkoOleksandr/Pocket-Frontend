import { useQuery } from 'react-query';

import { requestPocketAll } from '../../request/pocket';

export const usePocketAll = (settings?: any) =>
  useQuery(
    ['pocketAll'],
    () => requestPocketAll({ ...(settings?.config && { config: settings.config }) }),
    settings?.options && settings.options
  );
