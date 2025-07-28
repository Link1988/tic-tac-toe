import getWinner from '../getWinner';

describe('getWinner', () => {
  describe('3x3 board', () => {
    it('row winner', () => {
      const squares = [
        'X', 'X', 'X',
        null, null, null,
        null, null, null
      ];

      expect(getWinner(squares, 3)).toBe('X');
    });

    it('column winner', () => {
      const squares = [
        'O', null, null,
        'O', null, null,
        'O', null, null
      ];

      expect(getWinner(squares, 3)).toBe('O');
    });

    it('diagonal winner (top-left to bottom-right)', () => {
      const squares = [
        'X', null, null,
        null, 'X', null,
        null, null, 'X'
      ];

      expect(getWinner(squares, 3)).toBe('X');
    });

    it('diagonal winner (top-right to bottom-left)', () => {
      const squares = [
        null, null, 'O',
        null, 'O', null,
        'O', null, null
      ];

      expect(getWinner(squares, 3)).toBe('O');
    });

    it('should tie', () => {
      const squares = [
        'X', 'O', 'X',
        'O', 'X', 'O',
        'O', 'X', 'O'
      ];

      expect(getWinner(squares, 3)).toBe(null);
    });
  });

  describe('4x4 board', () => {
    it('row winner', () => {
      const squares = [
        'X', 'X', 'X', 'X',
        null, null, null, null,
        null, null, null, null,
        null, null, null, null
      ];

      expect(getWinner(squares, 4)).toBe('X');
    });

    it('column winner', () => {
      const squares = [
        'O', null, null, null,
        'O', null, null, null,
        'O', null, null, null,
        'O', null, null, null
      ];

      expect(getWinner(squares, 4)).toBe('O');
    });

    it('diagonal winner (top-left to bottom-right)', () => {
      const squares = [
        'X', null, null, null,
        null, 'X', null, null,
        null, null, 'X', null,
        null, null, null, 'X'
      ];

      expect(getWinner(squares, 4)).toBe('X');
    });

    it('diagonal winner (top-right to bottom-left)', () => {
      const squares = [
        null, null, null, 'O',
        null, null, 'O', null,
        null, 'O', null, null,
        'O', null, null, null
      ];

      expect(getWinner(squares, 4)).toBe('O');
    });

    it('should tie', () => {
      const squares = [
        'X', 'O', 'X', 'O',
        'O', 'X', 'O', 'X',
        'X', 'O', 'X', 'O',
        'X', 'O', 'X', 'O'
      ];

      expect(getWinner(squares, 4)).toBe(null);
    });
  });
});
