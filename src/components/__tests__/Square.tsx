import { render, screen, fireEvent } from '@testing-library/react';
import Square from '@/components/Square';

jest.mock('@/components/Icons/X', () => ({
  __esModule: true,
  default: () => <div data-testid="icon-x">X</div>,
}));

jest.mock('@/components/Icons/Circle', () => ({
  __esModule: true,
  default: () => <div data-testid="icon-circle">O</div>,
}));

describe('Square', () => {
  it('should render empty when value is null', () => {
    render(<Square value={null} onClickPosition={jest.fn()} />);

    expect(screen.queryByTestId('icon-x')).toBeNull();
    expect(screen.queryByTestId('icon-circle')).toBeNull();
  });

  it(`should render X when value is "X"`, () => {
    render(<Square value="X" onClickPosition={jest.fn()} />);

    expect(screen.getByTestId('icon-x')).toBeInTheDocument();
  });

  it(`should render O when value is "O"`, () => {
    render(<Square value="O" onClickPosition={jest.fn()} />);

    expect(screen.getByTestId('icon-circle')).toBeInTheDocument();
  });

  it('should execute onClickPosition function', () => {
    const handleClick = jest.fn();

    render(<Square value={null} onClickPosition={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
