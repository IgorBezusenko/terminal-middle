import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  path: "C:\\User>",
  bufferCommand: [],
  currentPosition: 0,
  currentCommand: "",
  // prevCommand: "",
  // nextCommand: "",
};

const terminalSlice = createSlice({
  name: "terminal",
  initialState,
  reducers: {
    addToHistory(state, action) {
      state.history.push(action.payload);
      if (state.history.length > 1) {
        state.currentPosition = state.currentPosition + 1;
      }
    },
    clearHistory(state, action) {
      state.history = [];
    },
    nextCommand(state) {
      if (state.currentPosition === state.history.length - 1) {
        state.currentCommand = state.history[state.currentPosition].command;
      } else {
        state.currentCommand = state.history[state.currentPosition + 1].command;
        state.currentPosition = state.currentPosition + 1;
      }
    },
    prevCommand(state) {
      if (state.currentPosition === 0) {
        state.currentCommand = state.history[state.currentPosition].command;
      } else {
        state.currentCommand = state.history[state.currentPosition].command;
        state.currentPosition = state.currentPosition - 1;
      }
    },
  },
});

export const TerminalAC = terminalSlice.actions;
export const terminalReducer = terminalSlice.reducer;
