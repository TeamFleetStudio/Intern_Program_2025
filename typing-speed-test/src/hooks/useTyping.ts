import { useEffect, useRef, useState } from "react";

export function useTyping(text: string, duration: number = 60) {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(0);

  const timerRef = useRef<number | null>(null);

  // Start timer on first key press
  useEffect(() => {
    if (input.length === 1 && !isRunning) {
      setIsRunning(true);

      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [input]);

  // Calculate WPM
  useEffect(() => {
    const words = input.trim().split(/\s+/).length;
    const minutes = (duration - timeLeft) / 60;
    if (minutes > 0) {
      setWpm(Math.round(words / minutes));
    }
  }, [input, timeLeft]);

  function reset() {
    setInput("");
    setTimeLeft(duration);
    setIsRunning(false);
    setWpm(0);
    if (timerRef.current) clearInterval(timerRef.current);
  }

  return { input, setInput, timeLeft, wpm, reset };
}
