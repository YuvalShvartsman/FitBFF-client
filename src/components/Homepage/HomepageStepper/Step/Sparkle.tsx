import useGetRandomPosition from "../../../../customHooks/useGetRandomPosition";

function Sparkle() {
  const randomPos = useGetRandomPosition();
  return (
    <div
      className="absolute h-1 w-1 bg-light rounded-full animate-sparkle"
      style={{ top: randomPos, left: randomPos }}
    />
  );
}

export default Sparkle;
