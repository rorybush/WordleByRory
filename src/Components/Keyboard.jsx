import React from "react";
import Key from "./Key";
import { useEffect, useCallback, useContext } from "react";
import { AppContext } from "./Provider";

function Keyboard() {
  const { onSelectLetter, onDelete, onSubmit } = useContext(AppContext);

  const topKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const midKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomKeys = ["Z", "X", "C", "V", "B", "N", "M"];
  const allKeys = [...topKeys, ...midKeys, ...bottomKeys];

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      onSubmit();
    } else if (e.key === "Backspace") {
      onDelete();
    } else {
      allKeys.forEach((key) => {
        if (e.key.toUpperCase() === key) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="topKeys">
        {topKeys.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="midKeys">
        {midKeys.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="bottomKeys">
        <Key keyValue={"Submit"} wideKey />
        {bottomKeys.map((key) => {
          return <Key keyValue={key} />;
        })}
        <Key keyValue={"Delete"} wideKey />
      </div>
    </div>
  );
}

export default Keyboard;
