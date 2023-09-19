import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Returned, ThunkArg, RejectedValue> = (
  arg: ThunkArg
) => AsyncThunkAction<Returned, ThunkArg, ThunkConfig<RejectedValue>>

jest.mock('axios');
const axiosMocked = jest.mocked(axios, true);

class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.Mock;

  constructor(
    actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = axiosMocked;
    this.navigate = jest.fn();
  }

  async callThunk(arg: ThunkArg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}

export default TestAsyncThunk;
