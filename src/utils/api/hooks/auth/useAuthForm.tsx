import { useMutation } from 'react-query';

import { LoginFromModel } from '../../../../../pages/Login/components';
import { SignUpFromModel } from '../../../../../pages/SignUp/components';
import { requestAuthForm } from '../../../request/auth';

type AuthParams = 'signup' | 'login';

type DataType = SignUpFromModel | LoginFromModel;

export const useAuthForm = (param: AuthParams, settings?: any) =>
  useMutation(
    ['auth', param],
    (data: DataType) =>
      requestAuthForm({ param, data, ...(settings?.config && { config: settings.config }) }),
    settings?.options && settings.options
  );
