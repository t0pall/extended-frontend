import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthByUsernamePassword = (state: StateSchema) => state?.authByUsername?.password || '';
