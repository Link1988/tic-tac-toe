import { render, screen, fireEvent, act } from '@testing-library/react';
import Board from '@/components/Board';

const mockResetTimer = jest.fn();
let handleExpire: (() => void) | null = null;
let timeLeft = 10;

jest.mock('@/components/Square', () => ({
  __esModule: true,
  default: ({ value, onClickPosition }: { value: string | null; onClickPosition: () => void }) => (
    <button onClick={onClickPosition} data-testid={`square-${value || 'empty'}`}>
      {value || 'empty'}
    </button>
  ),
}));

jest.mock('@/hooks/useCountdown', () => ({
  __esModule: true,
  default: (_: number, onExpire: () => void) => {
    handleExpire = onExpire;
    return {
      timeLeft: timeLeft,
      resetTimer: mockResetTimer,
    };
  },
}));

jest.mock('@/helpers/getWinner', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const mockGetWinner = require('@/helpers/getWinner').default;

describe('Board', () => {
  beforeEach(() => {
    handleExpire = null;
    mockResetTimer.mockClear();
    timeLeft = 10;
  });

  it('should render 9 squares', () => {
    render(<Board />);

    const squares = screen.getAllByTestId(/square-empty/);
    expect(squares).toHaveLength(9);
  });

  it('should display current player turn', () => {
    render(<Board />);
    expect(screen.getByText(/Your turn X/)).toBeInTheDocument();
  });

  it('should change player on square click', () => {
    render(<Board />);

    const firstSquare = screen.getAllByTestId('square-empty')[0];
    fireEvent.click(firstSquare);

    expect(screen.getByText(/Your turn O/)).toBeInTheDocument();
  });

  it('should change player when time expires', () => {
    render(<Board />);

    expect(screen.getByText(/Your turn X/)).toBeInTheDocument();

    act(() => {
      if (handleExpire) {
        handleExpire();
      }
    });

    expect(screen.getByText(/Your turn O/)).toBeInTheDocument();
  });

  it('should display timer with green color', () => {
    timeLeft = 8;
    render(<Board />);

    const timerElement = screen.getByText('8s');

    expect(timerElement).toHaveClass('bg-green-600', 'text-green-100');
  });

  it('should display timer with yellow color', () => {
    timeLeft = 4;
    render(<Board />);

    const timerElement = screen.getByText('4s');

    expect(timerElement).toHaveClass('bg-yellow-500', 'text-yellow-100');
  });

  it('should display timer with red color', () => {
    timeLeft = 2;
    render(<Board />);

    const timerElement = screen.getByText('2s');

    expect(timerElement).toHaveClass('bg-red-600', 'text-red-100', 'font-bold', 'animate-pulse');
  });

  it('should display winner', () => {
    mockGetWinner.mockReturnValue('X');
    render(<Board />);

    expect(screen.getByText(/Player X wins!/)).toBeInTheDocument();
  });

  it('should display is tie message', () => {
    mockGetWinner.mockReturnValue(null);
    render(<Board />);

    const squares = screen.getAllByTestId('square-empty');
    squares.forEach(square => {
      fireEvent.click(square);
    });

    expect(screen.getByText(/It's a tie!/)).toBeInTheDocument();
  });

  it('should reset game when reset button is clicked', () => {
    render(<Board />);

    const firstSquare = screen.getAllByTestId('square-empty')[0];
    fireEvent.click(firstSquare);

    expect(screen.getByText(/Your turn O/)).toBeInTheDocument();

    const resetButton = screen.getByText('Reset Game');
    fireEvent.click(resetButton);

    expect(screen.getByText(/Your turn X/)).toBeInTheDocument();
  });
});
