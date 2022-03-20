import terminalServer from "../../../api/api";
import { TerminalAC } from "./index";

export const TerminalThunk = {
  requestCommand: (item) => async (dispatch) => {
    try {
      // dispatch(AuthActionCreators.setIsLoading(true))
      // dispatch(AuthActionCreators.setError(""))
      setTimeout(async () => {
        const response = await terminalServer.getResponse();
        const mockData = response.data;

        if (mockData.hasOwnProperty(item)) {
          dispatch(TerminalAC.addToHistory(mockData[item]));
          // localStorage.setItem("auth", "true")
          // localStorage.setItem("username", mockUser.username)
          // dispatch(AuthActionCreators.setUser(mockUser))
          // dispatch(AuthActionCreators.setAuth(true))
        } else {
          dispatch(
            TerminalAC.addToHistory({
              command: item,
              answer: `${item}: command not found`,
            })
          );
          // dispatch(AuthActionCreators.setError("Не верный логин или пароль"))
        }
        // dispatch(AuthActionCreators.setIsLoading(false))
      }, 500);
    } catch (e) {
      // dispatch(AuthActionCreators.setIsLoading(false))
      // dispatch(AuthActionCreators.setError("Произошла ошибка при логине"))
    }
  },
};
