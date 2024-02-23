/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-self-assign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const storedSettingsMin = localStorage.getItem("settingsMin");
const storedSettingsMax = localStorage.getItem("settingsMax");

const initialState = {
  minValue: storedSettingsMin ? parseInt(storedSettingsMin) : 0,
  maxValue: storedSettingsMax ? parseInt(storedSettingsMax) : 0,
};

export type initialSettingsStateType = typeof initialState;

const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setMinValue: (state, action: PayloadAction<{ minValue: number }>) => {
      state.minValue = action.payload.minValue;
      localStorage.setItem("settingsMin", JSON.stringify(action.payload.minValue));
    },
    setMaxValue: (state, action: PayloadAction<{ maxValue: number }>) => {
      state.maxValue = action.payload.maxValue;
      localStorage.setItem("settingsMax", JSON.stringify(action.payload.maxValue));
    },
  },
});

export const settingsReducer = slice.reducer;
export const settingsActions = slice.actions;
