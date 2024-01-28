import { useState } from "react";
import "./tictactoe.css";
import PropTypes from "prop-types";
import { GiTicTacToe } from "react-icons/gi";
import Layout from "@/Components/Layout";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}
function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square w-15 h-15 m-1 cursor-pointer rounded-xl text-center text-4xl font-bold leading-9 ${
        isWinning ? "bg-white" : "bg-gray-700"
      } text-white`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isWinning: PropTypes.bool,
};

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) return;
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + squares[winner[0]];
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="status text-center text-2xl font-bold text-white/80">
        {status}
      </div>
      <div className="m-2 grid grid-flow-col grid-rows-3 rounded-xl bg-light-shade-gray p-4 shadow-md shadow-[#5C5552]">
        {[...Array(9)].map((_, i) => (
          <Square
            key={i}
            value={squares[i]}
            onClick={() => handleClick(i)}
            isWinning={winner?.includes(i)}
          />
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-2 flex justify-center gap-8  rounded-xl bg-dark-orange px-4 py-2 text-center font-bold text-[#5C5552] transition duration-200 hover:bg-[#F7F0F5]"
      >
        <GiTicTacToe className="h-6 w-6 rounded-lg bg-transparent" />
        <span>Reset Game</span>
        <GiTicTacToe className="h-6 w-6 rounded-lg bg-transparent" />
      </button>
    </div>
  );
}

function TicTacToeGame() {
  return (
    <>
      <Layout>
        <div className="relative mb-12 flex items-center justify-center gap-4">
          <GiTicTacToe className="h-6 w-6 rounded-lg bg-transparent" />
          <h1 className="text-xl font-medium text-black sm:text-2xl md:text-3xl">
            Tic-Tac-Toe Game
          </h1>
          <GiTicTacToe className="h-6 w-6 rounded-lg bg-transparent" />
        </div>
        <div className="gap-2 rounded-lg bg-black p-12 sm:gap-3 md:gap-4 lg:gap-6">
          <section className="">
            <Board />
          </section>
        </div>
      </Layout>
    </>
  );
}

export default TicTacToeGame;
