import { StateSchema } from 'app/providers/StoreProvider';
import { AuthByUsernameSchema } from '../../types/AuthByUsernameSchema';

export const getAuthByUsernameState = (state: StateSchema) => state?.authByUsername || {} as AuthByUsernameSchema;
