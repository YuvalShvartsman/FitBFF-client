import { useEffect, useState } from "react";

function useGetRandomPosition() {
  const [randomPos, setRandomPos] = useState("25px");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 40) + 1;
      setRandomPos(`${randomValue}px`);
    }, 3000); // Every 2 second sets a random position for the sparkle

    return () => clearInterval(interval);
  }, []);

  return randomPos;
}

export default useGetRandomPosition;
