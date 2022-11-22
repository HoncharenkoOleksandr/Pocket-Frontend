import { useQuery } from 'react-query';

import { requestPreview } from '../../request/pocket';

export const useUrlPreview = (link: string, settings?: any) =>
  useQuery(
    ['pocketLinkPreview'],
    () => requestPreview({ link, ...(settings?.config && { config: settings.config }) }),
    settings?.options && settings.options
  );
