/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-self-assign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialSettingsStateType } from "./settings-reducer";

const storedCount = localStorage.getItem("counter");
const initialState = {
  count: storedCount ? parseInt(storedCount) : 0,
};

export type initialStateType = typeof initialState | initialSettingsStateType;

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterInc: (state) => {
      state.count = state.count + 1;
      localStorage.setItem("counter", JSON.stringify(state.count));
    },
    counterDec: (state) => {
      state.count = state.count - 1;
      localStorage.setItem("counter", JSON.stringify(state.count));
    },
    counterReset: (state, action: PayloadAction<initialSettingsStateType>) => {
      state.count = action.payload.minValue;
      localStorage.setItem("counter", JSON.stringify(state.count));
    },
  },
});

export const counterReducer = slice.reducer;
export const counterActions = slice.actions;
