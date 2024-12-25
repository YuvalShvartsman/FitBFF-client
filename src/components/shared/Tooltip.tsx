import { useState } from "react";

type TooltipProps = {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  width?: string;
  children: React.ReactNode;
};

const Tooltip = ({
  content,
  position = "top",
  width = "15rem",
  children,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const baseClasses =
    "absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 opacity-0";
  const visibleClass = "opacity-100";

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
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
      <div
        className={`${baseClasses} ${positionClasses[position]} ${
          visible ? visibleClass : ""
        }`}
        style={{ width }}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
