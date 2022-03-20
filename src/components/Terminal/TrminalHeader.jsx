import React from "react";
import { BiCheckbox, BiMinus, BiX } from "react-icons/bi";

export const TerminalHeader = () => {
  return (
    <div className="terminal__header">
      <span className="terminal__icon danger">
        <BiX />
      </span>
      <span className="terminal__icon">
        <BiMinus />
      </span>
      <span className="terminal__icon">
        <BiCheckbox />
      </span>{" "}
      howtogeek@ubundu:~
    </div>
  );
};
