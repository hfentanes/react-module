import { useState, useRef, useCallback } from "react";

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const pointRef = useRef(null);
  const prevCounterRef = useRef(initialValue);

  const increment = useCallback(() => {
    setCounter((prevCounter) => {
      pointRef.current = prevCounter < prevCounterRef.current ? "down" : "up";
      prevCounterRef.current = prevCounter;
      return prevCounter + 1;
    });
  }, []);

  const decrement = useCallback(() => {
    setCounter((prevCounter) => {
      pointRef.current = prevCounter > prevCounterRef.current ? "up" : "down";
      prevCounterRef.current = prevCounter;
      return prevCounter - 1;
    });
  }, []);

  const reset = useCallback(() => {
    setCounter(initialValue);
    pointRef.current = null;
    prevCounterRef.current = initialValue;
  }, [initialValue]);

  return {
    counter,
    increment,
    decrement,
    reset,
    pointRef,
  };
}
