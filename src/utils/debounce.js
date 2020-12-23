import { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setInterval(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
