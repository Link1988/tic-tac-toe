import calculateWinner from "./calculateWinner";

export default function getWinner(
  squares: (string | null)[],
  rowSize: number = 3
): string | null {
  const lines = calculateWinner(rowSize);

  for (const line of lines) {
    const firstSquare = squares[line[0]];

    if (firstSquare && line.every(index => squares[index] === firstSquare)) {
      return firstSquare;
    }
  }

  return null;
}
