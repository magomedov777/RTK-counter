import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
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
      state.count = 0;
    },
  },
});

export const counterReducer = slice.reducer;
export const counterActions = slice.actions;
