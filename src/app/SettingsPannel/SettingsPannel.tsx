/* eslint-disable @typescript-eslint/no-unused-vars */
import FormControl from "@mui/material/FormControl/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../counter-reducer";
import { AppRootStateType } from "../store";

export const SettingsPannel = () => {
  const dispatch = useDispatch();
  const minValue = useSelector<AppRootStateType>((state) => state.counter.minValue);
  const maxValue = useSelector<AppRootStateType>((state) => state.counter.maxValue);

  const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    let setValue = +e.currentTarget.value;
    dispatch(counterActions.setMinValue(setValue));
  };
  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let setValue = +e.currentTarget.value;
    dispatch(counterActions.setMaxValue(setValue));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <h2>SET MIN VALUE</h2>
      <form noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput placeholder="" onChange={changeMinValue} value={minValue} />
        </FormControl>
      </form>

      <h2>SET MAX VALUE</h2>
      <form noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput placeholder="" onChange={changeMaxValue} value={maxValue} />
        </FormControl>
      </form>
    </div>
  );
};
