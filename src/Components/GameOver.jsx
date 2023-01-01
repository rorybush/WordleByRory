import React, { useContext } from "react";
import { AppContext } from "./Provider";

function GameOver() {
  const { gameOver, setGameOver, newWord, currAttempt } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Congratulations 🥳"
          : "Better Luck Next Time 👻"}
      </h3>
      <h1>The Correct Word is {newWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
