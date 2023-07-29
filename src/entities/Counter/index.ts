import Counter from './ui/Counter';
import { CounterSchema } from './model/types/CounterSchema';
import { counterActions, counterReducer } from './model/slice/counterSlice';

export {
  Counter, CounterSchema, counterActions, counterReducer,
};
