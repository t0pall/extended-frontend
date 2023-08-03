import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthByUsernameUsername = (state: StateSchema) => state?.authByUsername?.username || '';
