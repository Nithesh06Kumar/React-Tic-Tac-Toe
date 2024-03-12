import React, { useState } from "react";
//moving this logic to App file
// const INITIAL_GAME_BOARD = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
const GameBoard = ({ gameBoard, onClickSymbol }) => {
  //moving this logic to App file
  //   let gameBoard = INITIAL_GAME_BOARD; //this is called deriving state. make less use of state

  //   for (const value of gameTurn) {
  //     const { position, playerSymbol } = value;
  //     gameBoard[position?.rowIndex][position?.colIndex] = playerSymbol;
  //   }
  //   const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);  //logic lifted to the APP component

  //   const handleButtonClick = (rowIndex, colIndex) => {
  //     if (gameBoard[rowIndex][colIndex]) {
  //       return;
  //     }
  //     setGameBoard((prevBoard) => {
  //       const updatedBoard = [...prevBoard.map(arr=>[...arr])];  //Deep copy
  //       updatedBoard[rowIndex][colIndex] = symbol;
  //       return updatedBoard;
  //     });
  //     onClickSymbol();
  //   };
  const handleButtonClick = (row, col) => {
    if (gameBoard[row][col]) {
      return;
    }
    onClickSymbol(row, col);
  };

  return (
    <ol id="game-board">
      {gameBoard?.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row?.map((col, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => handleButtonClick(rowIndex, colIndex)}>
                {col}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

export default GameBoard;
