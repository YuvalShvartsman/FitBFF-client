import useGetRandomPosition from "../../../../customHooks/useGetRandomPosition";

type SparkleProps = {
  containerSize: number;
  sparkleSize: number;
};

function Sparkle({ containerSize, sparkleSize }: SparkleProps) {
  const randomPos = useGetRandomPosition(containerSize, sparkleSize);

  return (
    <div
      className="absolute h-1 w-1 bg-light rounded-full animate-sparkle"
      style={{ top: randomPos.top, left: randomPos.left }}
    />
  );
}

export default Sparkle;
