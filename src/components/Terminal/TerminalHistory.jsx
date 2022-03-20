import React from "react";

export const TerminalHistory = ({ history }) => {
    return (
        <div>
            {history.length !== 0 &&
            history.map((item, idx) => (
                <div key={idx} className="terminal__history">
                    <div>
                        <span>howtogeek@ubundu:~$</span> {item.command}
                    </div>
                    <div>{item.answer}</div>
                </div>
            ))}
        </div>
    );
};
