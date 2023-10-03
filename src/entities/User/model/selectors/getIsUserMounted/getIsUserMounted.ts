import { StateSchema } from 'app/providers/StoreProvider';

export const getIsUserMounted = (state: StateSchema) => state?.user?._isMounted;
