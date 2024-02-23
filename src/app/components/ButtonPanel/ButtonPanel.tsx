/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "@mui/material/Button/Button";
import React, { useState } from "react";
import { counterActions } from "../../../model/counter-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store";

export const ButtonPanel = () => {
  const dispatch = useDispatch();
  const minValue = useSelector<AppRootStateType, number>((state) => state.settings.minValue);
  const maxValue = useSelector<AppRootStateType, number>((state) => state.settings.maxValue);
  const count = useSelector<AppRootStateType>((state) => state.counter.count);
  const [error, setError] = useState<string | null>("");

  const increase = () => {
    if (count === maxValue) {
      setError("MAX Value");
      return maxValue;
    }
    dispatch(counterActions.counterInc());
    setError("");
  };

  const decrease = () => {
    if (count === minValue) return;
    dispatch(counterActions.counterDec());
  };

  const reset = () => {
    if (count === minValue) {
      setError("ERRROR");
      return;
    }
    setError("");
    dispatch(counterActions.counterReset({ minValue, maxValue }));
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
