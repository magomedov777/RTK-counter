/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "@mui/material/Button/Button";
import React, { useEffect, useState } from "react";
// import { val } from "../../enum";
import { counterActions } from "../../counter-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store";

export const ButtonPanel = () => {
  const dispatch = useDispatch();
  const minValue = useSelector<AppRootStateType>((state) => state.counter.minValue);
  const maxValue = useSelector<AppRootStateType>((state) => state.counter.maxValue);
  const count = useSelector<AppRootStateType>((state) => state.counter.count);
  const [error, setError] = useState("");

  const increase = () => {
    if (count === maxValue) {
      setError("MAX Value");
      return maxValue;
    }
    dispatch(counterActions.counterInc());
    setError("");
  };

  const decrease = () => {
    if (count === maxValue) return 0;
    dispatch(counterActions.counterDec());
  };

  const reset = () => {
    if (count === minValue) {
      setError("ERRROR");
      return;
    }
    setError("");
    dispatch(counterActions.counterReset());
  };

  return (
    <div className="buttons">
      {count === maxValue ? (
        <Button variant="contained" onClick={increase} disabled>
          +
        </Button>
      ) : (
        <Button variant="contained" onClick={increase}>
          +
        </Button>
      )}
      {count === minValue ? (
        <Button variant="contained" onClick={reset} disabled>
          reset
        </Button>
      ) : (
        <Button variant="contained" onClick={reset}>
          reset
        </Button>
      )}

      {count === minValue ? (
        <Button variant="contained" onClick={decrease} disabled>
          -
        </Button>
      ) : (
        <Button variant="contained" onClick={decrease}>
          -
        </Button>
      )}
    </div>
  );
};
