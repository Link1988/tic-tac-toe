// Win Combinations
// Rows
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

// Columns
// [0, 3, 6]
// [1, 4, 7]
// [2, 5, 8]

// Diagonals
// [0, 4, 8]
// [2, 4, 6]

export default function calculateWinner(boardSize: number = 3): number[][] {
  const lines: number[][] = [];

  // Rows
  for (let row = 0; row < boardSize; row++) {
    lines.push(
      [...Array(boardSize)].map((_, index) => row * boardSize + index)
    );
  }

  // Cols
  for (let col = 0; col < boardSize; col++) {
    lines.push(
      [...Array(boardSize)].map((_, index) => index * boardSize + col)
    );
  }

  // Diagonal
  lines.push([...Array(boardSize)].map((_, i) => i * boardSize + i));
  lines.push(
    [...Array(boardSize)].map((_, i) => i * boardSize + (boardSize - 1 - i))
  );

  return lines;
}
