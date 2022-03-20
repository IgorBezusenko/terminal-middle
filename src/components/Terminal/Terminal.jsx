import React, { useEffect, useRef, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import "./Terminal.css";

import { TerminalInput } from "./TerminalInput";
import { TerminalHeader } from "./TrminalHeader";
import { TerminalHistory } from "./TerminalHistory";
import TerminalError from "./TerminalError";

const Terminal = () => {
  const { history, buffer, currentCommand, error } = useSelector(
    (state) => state.terminalReducer
  );
  const {
    requestCommand,
    nextCommand,
    prevCommand,
    clearHistory,
    setError,
  } = useAction();
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) handleFocus();
  }, [history]);

  useEffect(() => {
    setInput(currentCommand);
  }, [currentCommand]);

  const handleFocus = () => {
    inputRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter": {
        input.trim() === "clear" ? clearHistory() : requestCommand(input);
        setInput("");
        break;
      }
      case "ArrowUp": {
        prevCommand();
        break;
      }
      case "ArrowDown": {
        nextCommand();
        break;
      }

      default:
        break;
    }
  };

  const onCloseError = () => {
    setError("");
  };

  return (
    <div className="terminal" onClick={handleFocus}>
      {error && <TerminalError error={error} onCloseError={onCloseError} />}
      <TerminalHeader />
      <TerminalHistory history={history} />
      <TerminalInput
        input={input}
        inputRef={inputRef}
        onChangeInput={onChangeInput}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Terminal;
