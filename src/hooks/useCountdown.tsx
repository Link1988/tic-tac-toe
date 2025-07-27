import { useEffect, useState, useRef } from "react";

export default function useCountdown(seconds: number, onExpire: () => void) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => setTimeLeft(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    timer.current = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [timer, timeLeft, onExpire]);

  return { timeLeft, resetTimer };
}
