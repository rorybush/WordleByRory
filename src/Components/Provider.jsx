import React, { useEffect } from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import { boardDefault, newWord } from "../Util/Word-Util";
import { useState, createContext } from "react";
import wordsList from "../Util/Words";

export const AppContext = createContext();

function Provider() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);

  let correctWord = "acorn";

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

    let currWord = "";

    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordsList.includes(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("word not found");
    }

    if (currWord.toUpperCase() === correctWord.toUpperCase()) {
      alert("game ended");
    }
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
          disabledLetters,
          setDisabledLetters,
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
