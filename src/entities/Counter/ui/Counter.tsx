/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">{`Value: ${value}`}</h1>
      <Button
        data-testid="counter-increment-button"
        onClick={increment}
        type="button"
        theme={ButtonTheme.OUTLINE}
      >
        increment
      </Button>
      <Button
        data-testid="counter-decrement-button"
        onClick={decrement}
        type="button"
        theme={ButtonTheme.OUTLINE}
      >
        decrement
      </Button>
    </div>
  );
};

export default Counter;
