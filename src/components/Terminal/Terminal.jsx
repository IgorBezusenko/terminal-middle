import React, { useEffect, useRef, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import "./Terminal.css";

import { TerminalInput } from "./TerminalInput";
import { TerminalHeader } from "./TrminalHeader";
import { TerminalHistory } from "./TerminalHistory";

const Terminal = () => {
  const { history, path, currentCommand } = useSelector(
    (state) => state.terminalReducer
  );
  const { requestCommand, nextCommand, prevCommand } = useAction();
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
        if (input.trim()) requestCommand(input);
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

  // useEffect(() => {
  //   requestCommand("help");
  // }, []);

  return (
    <div className="terminal" onClick={handleFocus}>
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
