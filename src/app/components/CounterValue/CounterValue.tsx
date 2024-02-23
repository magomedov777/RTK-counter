import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store";

const styleValue = {
  fontFamily: "fantasy",
  fontSize: "60px",
};
const styleMaxValue = {
  fontFamily: "fantasy",
  fontSize: "60px",
  color: "red",
};
const styleMinValue = {
  fontFamily: "fantasy",
  fontSize: "60px",
  color: "green",
};

export const CounterValue = () => {
  const count = useSelector<AppRootStateType>((state) => state.counter.count);
  const minValue = useSelector<AppRootStateType>((state) => state.settings.minValue);
  const maxValue = useSelector<AppRootStateType>((state) => state.settings.maxValue);

  return (
    <div>
      {count === minValue ? (
        <h1 style={styleMinValue}>{count as ReactNode}</h1>
      ) : count === maxValue ? (
        <h1 style={styleMaxValue}>{count as ReactNode}</h1>
      ) : (
        <h1 style={styleValue}>{count as ReactNode}</h1>
      )}
    </div>
  );
};
