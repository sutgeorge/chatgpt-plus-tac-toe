import React, { JSX, useState } from 'react';
import './TicTacToe.css';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const initialBoard: Player[] = Array(9).fill(null);
  const [board, setBoard] = useState<Player[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? "It's a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(index: number): void {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame(): void {
    setBoard(initialBoard);
    setXIsNext(true);
  }

  function renderSquare(index: number): JSX.Element {
    return (
      <button onClick={() => handleClick(index)} className="square">
        {board[index]}
      </button>
    );
  }

  return (
    <div className="game">
      <div className="board">
        {board.map((_, i) => renderSquare(i))}
      </div>
      <div className="status">{status}</div>
      <button onClick={resetGame} className="restart-button">
        Restart
      </button>
    </div>
  );
};

function calculateWinner(squares: Player[]): Player {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
