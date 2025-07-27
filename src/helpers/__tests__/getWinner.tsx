import getWinner from '@/helpers/getWinner';

describe('getWinner', () => {
  it('row win', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(getWinner(squares)).toBe('X');
  });

  it('column win', () => {
    const squares = ['O', null, null, 'O', null, null, 'O', null, null];
    expect(getWinner(squares)).toBe('O');
  });

  it('diagonal win (top-left to bottom-right)', () => {
    const squares = ['X', null, null, null, 'X', null, null, null, 'X'];
    expect(getWinner(squares)).toBe('X');
  });

  it('diagonal win (top-right to bottom-left)', () => {
    const squares = [null, null, 'O', null, 'O', null, 'O', null, null];
    expect(getWinner(squares)).toBe('O');
  });

  it('tie', () => {
    const squares = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(getWinner(squares)).toBe(null);
  });
});
