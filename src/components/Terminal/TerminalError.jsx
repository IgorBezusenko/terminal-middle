import React from "react";

const TerminalError = ({ error, onCloseError }) => {
  return (
    <div className="terminal__error" onClick={onCloseError}>
      {error}
    </div>
  );
};

export default TerminalError;
