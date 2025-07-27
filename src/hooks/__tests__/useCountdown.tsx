import { renderHook, act } from '@testing-library/react';
import useCountdown from '@/hooks/useCountdown';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('useCountdown', () => {
  it('should initialize', () => {
    const { result } = renderHook(() => useCountdown(5, jest.fn()));
    expect(result.current.timeLeft).toBe(5);
  });

  it('should decrease timer', () => {
    const { result } = renderHook(() => useCountdown(3, jest.fn()));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.timeLeft).toBe(2);
  });

  it('should call onExpire when timeLeft is 0', () => {
    const onExpire = jest.fn();
    renderHook(() => useCountdown(1, onExpire));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(onExpire).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer when resetTimer is called', () => {
    const { result } = renderHook(() => useCountdown(5, jest.fn()));

    act(() => {
      jest.runAllTimers();
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.timeLeft).toBe(3);

    act(() => {
      result.current.resetTimer();
    });

    expect(result.current.timeLeft).toBe(5);
  });
});
