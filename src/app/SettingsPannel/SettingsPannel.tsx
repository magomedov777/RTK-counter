/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import FormControl from "@mui/material/FormControl/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import React, { ChangeEvent, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../store";
import { settingsActions } from "../../model/settings-reducer";

export const SettingsPannel = memo(() => {
  const dispatch = useDispatch();
  const minValue = useSelector<AppRootStateType>((state) => state.settings.minValue);
  const maxValue = useSelector<AppRootStateType>((state) => state.settings.maxValue);

  const changeMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let setValue = +e.currentTarget.value;
    dispatch(settingsActions.setMinValue({ minValue: setValue }));
  }, []);

  const changeMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let setValue = +e.currentTarget.value;
    dispatch(settingsActions.setMaxValue({ maxValue: setValue }));
  }, []);

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
      <br />

      <h2>SET MAX VALUE</h2>
      <form noValidate autoComplete="off">
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput placeholder="" onChange={changeMaxValue} value={maxValue} />
        </FormControl>
      </form>
      <br />
    </div>
  );
});
