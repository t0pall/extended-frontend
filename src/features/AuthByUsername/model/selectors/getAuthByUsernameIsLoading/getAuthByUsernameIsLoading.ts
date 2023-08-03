import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthByUsernameIsLoading = (state: StateSchema) => state?.authByUsername?.isLoading || false;
