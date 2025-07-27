import { useState, useMemo } from "react";

import Square from "@/components/Square";
import useCountdown from "@/hooks/useCountdown";

import getWinner from "@/helpers/getWinner";

const ROW_SIZE = 3;

type SquareValue = "X" | "O" | null;

export default function Board() {
  const [isX, setIsX] = useState(true);
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));

  const currentPlayer: SquareValue = isX ? "X" : "O";
  const winner = useMemo(() => getWinner(squares), [squares]);
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
    setSquares(Array(9).fill(null));
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

      <div className="grid grid-cols-3 gap-4">
        {[...Array(ROW_SIZE)].map((_, row) => (
          <div key={row} className="flex flex-col gap-4">
            {[...Array(ROW_SIZE)].map((_, col) => {
              const index = row * ROW_SIZE + col;
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
