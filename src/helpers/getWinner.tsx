import calculateWinner from "./calculateWinner";

export default function getWinner(
  squares: (string | null)[],
  rowSize: number = 3
): string | null {
  const lines = calculateWinner(rowSize);

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
