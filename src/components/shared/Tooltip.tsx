import { useState } from "react";

type TooltipProps = {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

function Tooltip({ content, position = "top", children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const getPositionClasses = (position: string) => {
    const base =
      "absolute z-10 p-2 text-sm text-white bg-gray-800 rounded shadow-lg whitespace-nowrap";

    switch (position) {
      case "top":
        return `${base} bottom-full left-1/2 -translate-x-1/2 mb-2`;
      case "bottom":
        return `${base} top-full left-1/2 -translate-x-1/2 mt-2`;
      case "left":
        return `${base} right-full top-1/2 -translate-y-1/2 mr-2`;
      case "right":
        return `${base} left-full top-1/2 -translate-y-1/2 ml-2`;
      default:
        return base;
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && <div className={getPositionClasses(position)}>{content}</div>}
    </div>
  );
}

export default Tooltip;
