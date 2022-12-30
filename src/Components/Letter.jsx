import React from "react";
import { useContext } from "react";
import { AppContext } from "./Provider";

function Letter({ row, letterPos }) {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  const letter = board[row][letterPos];
  const correctSpot = correctWord[letterPos] === letter;
  const wrongSpot =
    !correctSpot && letter !== "" && correctWord.includes(letter);
  const letterState =
    currAttempt.attempt > row &&
    (correctSpot ? "correct--spot" : wrongSpot ? "wrong--spot" : "wrong");

  return (
    <div className="letter" id={letterState}>
      {" "}
      {letter}
    </div>
  );
}

export default Letter;
