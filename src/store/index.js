import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { terminalReducer } from "./reducers/terminal";

const rootReducer = combineReducers({
  terminalReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();
