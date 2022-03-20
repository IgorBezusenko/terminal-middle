import React from "react";

export const TerminalInput = ({
  inputRef,
  input,
  onChangeInput,
  handleKeyDown,
}) => {
  return (
    <div>
      <span>howtogeek@ubundu:~$</span>
      <input
        className="terminal__input"
        ref={inputRef}
        type="text"
        value={input}
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
