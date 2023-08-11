import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';

export const getLoginState = (state: StateSchema) => state?.login
  || ({
    error: undefined,
    isLoading: false,
    password: '',
    username: '',
  } as LoginSchema);
