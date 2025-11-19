import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    setCount(0); // reset before starting

    const increment = end / (duration / 16.7);

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [shouldStart, end, duration]);

  return count;
}
