import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthByUsernameError = (state: StateSchema) => state?.authByUsername?.error || '';
