import { TerminalAC } from "./terminal";
import { TerminalThunk } from "./terminal/terminal-thunk-creators";

export const allActionCreators = {
  ...TerminalAC,
  ...TerminalThunk,
  // ...any action creators,
};
