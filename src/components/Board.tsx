import { useState, useMemo } from "react";

import Square from "@/components/Square";
import useCountdown from "@/hooks/useCountdown";

import getWinner from "@/helpers/getWinner";

type SquareValue = "X" | "O" | null;

export default function Board({ boardSize }: { boardSize: number }) {
  const TOTAL_SQUARES = boardSize * boardSize;

  const [isX, setIsX] = useState(true);
  const [squares, setSquares] = useState<SquareValue[]>(Array(TOTAL_SQUARES).fill(null));

  const currentPlayer: SquareValue = isX ? "X" : "O";
  const winner = useMemo(() => getWinner(squares, boardSize), [squares, boardSize]);
  const isTie = squares.every((square) => square !== null) && !winner;

  const handleExpire = () => {
    setIsX((prev) => !prev);
    resetTimer();
  };

  const { timeLeft, resetTimer } = useCountdown(10, handleExpire);

  const onClickPosition = (i: number) => {
    if (squares[i] || winner || isTie) return;

    const nextSquares = [...squares];

    nextSquares[i] = isX ? "X" : "O";

    setSquares(nextSquares);
    setIsX(!isX);
    resetTimer();
  };

  const resetGame = () => {
    setSquares(Array(TOTAL_SQUARES).fill(null));
    resetTimer();
    setIsX(true);
  };

  return (
    <section>
      <div className="flex flex-col items-center gap-3">
        <div className="flex max-w-xs mt-10">
          <h1
            className={`text-3xl ${winner ? "text-green-500" : "text-white"}`}
          >
            {winner
              ? `Player ${winner} wins!`
              : isTie
              ? "It's a tie!"
              : `Your turn ${currentPlayer}`}
          </h1>
        </div>
        <div className="text-3xl text-white text-center font-semibold mb-4 select-none">
          {winner || isTie ? (
            "Reset game"
          ) : (
            <>
              Time left:{" "}
              <span
                className={`
          inline-block px-3 py-1 rounded-full font-mono
          transition-colors duration-300
          ${
            timeLeft > 5
              ? "bg-green-600 text-green-100"
              : timeLeft > 3
              ? "bg-yellow-500 text-yellow-100"
              : "bg-red-600 text-red-100 font-bold animate-pulse"
          }
        `}
              >
                {timeLeft}s
              </span>
            </>
          )}
        </div>
      </div>

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
        }}
      >
        {[...Array(boardSize)].map((_, row) => (
          <div key={row} className="flex flex-col gap-4">
            {[...Array(boardSize)].map((_, col) => {
              const index = row * boardSize + col;
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  onClickPosition={() => onClickPosition(index)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 border-2 border-white text-white rounded-xl text-lg hover:bg-white hover:text-emerald-500 transition-colors w-full"
      >
        Reset Game
      </button>
    </section>
  );
}
