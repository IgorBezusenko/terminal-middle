import terminalServer from "../../../api/api";
import { TerminalAC } from "./index";

export const TerminalThunk = {
  requestCommand: (item) => async (dispatch) => {
    try {
      setTimeout(async () => {
        const response = await terminalServer.getResponse();
        const mockData = response.data;

        if (mockData.hasOwnProperty(item)) {
          dispatch(TerminalAC.addToHistory(mockData[item]));
          dispatch(TerminalAC.addToBufferCommand(mockData[item]));
        } else {
          dispatch(
            TerminalAC.addToHistory({
              command: item,
              answer: `${item}: command not found`,
            })
          );
          dispatch(
            TerminalAC.addToBufferCommand({
              command: item,
              answer: `${item}: command not found`,
            })
          );
        }
      }, 500);
    } catch (e) {
      dispatch(TerminalAC.setError("Произошла ошибка"));
    }
  },
};
