import React from "react";
import Letter from "./Letter";

function Board() {
  return (
    <div className="board">
      <div className="row">
        <Letter letterPos={0} row={0} />
        <Letter letterPos={1} row={0} />
        <Letter letterPos={2} row={0} />
        <Letter letterPos={3} row={0} />
        <Letter letterPos={4} row={0} />
      </div>
      <div className="row">
        <Letter letterPos={0} row={1} />
        <Letter letterPos={1} row={1} />
        <Letter letterPos={2} row={1} />
        <Letter letterPos={3} row={1} />
        <Letter letterPos={4} row={1} />
      </div>
      <div className="row">
        <Letter letterPos={0} row={2} />
        <Letter letterPos={1} row={2} />
        <Letter letterPos={2} row={2} />
        <Letter letterPos={3} row={2} />
        <Letter letterPos={4} row={2} />
      </div>
      <div className="row">
        <Letter letterPos={0} row={3} />
        <Letter letterPos={1} row={3} />
        <Letter letterPos={2} row={3} />
        <Letter letterPos={3} row={3} />
        <Letter letterPos={4} row={3} />
      </div>
      <div className="row">
        <Letter letterPos={0} row={4} />
        <Letter letterPos={1} row={4} />
        <Letter letterPos={2} row={4} />
        <Letter letterPos={3} row={4} />
        <Letter letterPos={4} row={4} />
      </div>
      <div className="row">
        <Letter letterPos={0} row={5} />
        <Letter letterPos={1} row={5} />
        <Letter letterPos={2} row={5} />
        <Letter letterPos={3} row={5} />
        <Letter letterPos={4} row={5} />
      </div>
    </div>
  );
}

export default Board;
