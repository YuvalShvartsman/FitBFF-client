import { useEffect, useState } from "react";

function useGetRandomPosition() {
  const [randomPos, setRandomPos] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPos(`${Math.random() * 50}px`);
    }, 3000); // Every 3 second sets a random position for the sparkle

    return () => clearInterval(interval);
  }, []);

  return randomPos;
}

export default useGetRandomPosition;
