import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./Provider";

function Letter({ letterPos, row }) {
  const { board, newWord, currAttempt, disabledLetters, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[row][letterPos];
  const correctSpot = newWord[letterPos] === letter;
  const wrongSpot = !correctSpot && letter !== "" && newWord.includes(letter);
  const letterColour =
    currAttempt.attempt > row &&
    (correctSpot ? "correct--spot" : wrongSpot ? "wrong--spot" : "wrong");

  useEffect(() => {
    if (letter !== "" && !wrongSpot && !correctSpot) {
      setDisabledLetters((prevDisabled) => [...prevDisabled, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterColour}>
      {" "}
      {letter}
    </div>
  );
}

export default Letter;
