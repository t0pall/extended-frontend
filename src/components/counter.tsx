import { useState } from "react";
import classes from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className={classes.heading}>{count}</h1>
      <button onClick={increment}>+</button>
    </>
  );
};
