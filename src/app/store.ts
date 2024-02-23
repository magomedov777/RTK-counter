import { AnyAction, ThunkAction, ThunkDispatch, combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../model/counter-reducer";
import { settingsReducer } from "../model/settings-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// @ts-ignore
window.store = store;
