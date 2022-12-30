import React, { useEffect } from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { boardDefault, generateWordSet } from "../Words";
import { useState, createContext } from "react";

export const AppContext = createContext();

function Provider() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const correctWord = "ACORN";

  useEffect(() => {
    generateWordSet().then((word) => {
      console.log(word);
    });
  }, []);

  const onSelectLetter = (keyValue) => {
    const newBoard = [...board];
    if (currAttempt.letterPos > 4) return;
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyValue;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos + 1,
    });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onSubmit = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };
  return (
    <div>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onSubmit,
          correctWord,
        }}
      >
        <div className="gameLayout">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default Provider;
