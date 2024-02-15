import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store";
import { val } from "../../enum";

const styleValue = {
  fontFamily: "fantasy",
  fontSize: "60px",
};
const styleMaxValue = {
  fontFamily: "fantasy",
  fontSize: "60px",
  color: "red",
};

export const CounterValue = () => {
  const count = useSelector<AppRootStateType>((state) => state.counter.count);

  return (
    <div>
      {count === val.MAXVALUE ? (
        <h1 style={styleMaxValue}>{count as ReactNode}</h1>
      ) : (
        <h1 style={styleValue}>{count as ReactNode}</h1>
      )}
    </div>
  );
};
