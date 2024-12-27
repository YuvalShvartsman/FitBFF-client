import { useEffect, useState } from "react";

function useGetRandomPosition(containerSize: number, sparkleSize: number) {
  const generateRandomPosition = () => {
    const radius = (containerSize - sparkleSize) / 2;
    const angle = Math.random() * 2 * Math.PI;
    const randomRadius = Math.random() * radius;

    const top = radius + randomRadius * Math.sin(angle);
    const left = radius + randomRadius * Math.cos(angle);

    return {
      top: `${top}px`,
      left: `${left}px`,
    };
  };

  const [position, setPosition] = useState(generateRandomPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(generateRandomPosition());
    }, 3000); // Update position every 3 seconds

    return () => clearInterval(interval);
  }, [containerSize, sparkleSize]);

  return position;
}

export default useGetRandomPosition;
