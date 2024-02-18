/* eslint-disable no-self-assign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { val } from "./enum";

const initialState = {
  count: 0,
  minValue: 0,
  maxValue: 0,
};

export type initialStateType = typeof initialState;

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterInc: (state) => {
      state.count = state.count + 1;
    },
    counterDec: (state) => {
      state.count = state.count - 1;
    },
    counterReset: (state) => {
      state.count = state.minValue;
    },
    setMinValue: (state, action: PayloadAction<number>) => {
      state.minValue = action.payload;
    },
    setMaxValue: (state, action: PayloadAction<number>) => {
      state.maxValue = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const counterActions = slice.actions;
