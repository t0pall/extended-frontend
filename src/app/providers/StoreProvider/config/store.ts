import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
