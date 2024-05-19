import { useState, useEffect } from "react";

const useTimer = (delay: number) => {
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeUp(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return timeUp;
};

export default useTimer;
