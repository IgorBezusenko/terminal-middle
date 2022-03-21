import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
  history: [],
  path: "C:\\User>",
  buffer: [],
  currentPosition: 0,
  currentCommand: "",
};

const terminalSlice = createSlice({
  name: "terminal",
  initialState,
  reducers: {
    addToBufferCommand(state, action) {
      state.buffer.push(action.payload);
      if (state.buffer.length > 1) {
        state.currentPosition =  state.buffer.length-1;
      }
    },
    addToHistory(state, action) {
      state.history.push(action.payload);
    },
    clearHistory(state) {
      state.history = [];
    },
    nextCommand(state) {
      if (state.currentPosition === state.buffer.length - 1) {
        state.currentCommand = state.buffer[state.currentPosition].command;
      } else {
        state.currentPosition = state.currentPosition + 1;
        state.currentCommand = state.buffer[state.currentPosition].command;
      }
    },
    prevCommand(state) {
      if (state.currentPosition === 0) {
        state.currentCommand = state.buffer[state.currentPosition].command;
      } else {
        state.currentCommand = state.buffer[state.currentPosition].command;
        state.currentPosition = state.currentPosition - 1;
      }
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearCurrentCommand(state){
      state.currentCommand= ""
    }
  },
});

export const TerminalAC = terminalSlice.actions;
export const terminalReducer = terminalSlice.reducer;
