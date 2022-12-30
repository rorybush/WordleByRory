import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./Provider";

function Key({ keyValue, wideKey }) {
  const { onSelectLetter, onDelete, onSubmit } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "Submit") {
      onSubmit();
    } else if (keyValue === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };
  return (
    <div className={"key"} id={wideKey && "wide"} onClick={selectLetter}>
      {keyValue}
    </div>
  );
}

export default Key;
