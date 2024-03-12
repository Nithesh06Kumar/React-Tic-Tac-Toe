import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";
import Logs from "./components/LogPrint/Logs";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver/GameOver";
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; //this is called deriving state. make less use of state
  const [symbol, setSymbol] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [player, setplayer] = useState({ X: "Player1", O: "Player2" });
  let winner;
  for (const value of gameTurns) {
    const { position, playerSymbol } = value;
    gameBoard[position?.rowIndex][position?.colIndex] = playerSymbol;
  }

  for (const combo of WINNING_COMBINATIONS) {
    const firstValue = gameBoard[combo[0].row][combo[0].column];
    const secondValue = gameBoard[combo[1].row][combo[1].column];
    const thirdValue = gameBoard[combo[2].row][combo[2].column];

    if (firstValue && firstValue === secondValue && firstValue === thirdValue) {
      winner = player[firstValue];
    }
  }
  const hasDraw = gameTurns?.length === 9 && !winner;
  const handleSymbolChange = (rowIndex, colIndex) => {
    setSymbol((prev) => (prev === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].playerSymbol === "X") {
        //insted of using state value (symbol) better to use this type of logics (currentPlayer). since state will not be updated here
        currentPlayer = "O";
      }
      const updatedTurns = [
        { position: { rowIndex, colIndex }, playerSymbol: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handleOnRetart = () => {
    setGameTurns([]);
    setSymbol("X");
  };

  const handleOnPlayerNameSet = (symbol, name) => {
    setplayer((prev) => {
      return { ...prev, [symbol]: name };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={player.X}
            symbol="X"
            isActive={symbol === "X"}
            onPlayerNameSet={handleOnPlayerNameSet}
          />
          <Player
            name={player.O}
            symbol="O"
            isActive={symbol === "O"}
            onPlayerNameSet={handleOnPlayerNameSet}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleOnRetart} />
        )}
        <GameBoard gameBoard={gameBoard} onClickSymbol={handleSymbolChange} />
      </div>
      <Logs turn={gameTurns} />
    </main>
  );
}

export default App;
