import React, { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incremetn = () => {
    setCount(count + 1);
  };
  return (
    <div className={classes.button}>
      <h1>{count}</h1>
      <button onClick={incremetn}>incremetn</button>
    </div>
  );
};

export default Counter;
