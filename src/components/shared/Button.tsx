import React from "react";

import { Loader2 } from "lucide-react";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  Icon?: React.ComponentType;
  loading?: boolean;
  variant?: "primary" | "ghost";
};

const Button = ({
  disabled = false,
  onClick,
  text,
  Icon,
  loading = false,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative inline-flex items-center justify-center px-4 py-2 font-semibold rounded transition-all duration-300 transform
        ${
          variant === "primary" &&
          "bg-gradient-to-r from-brightBlue-500 via-brightBlue-600 to-brightBlue-700 text-light shadow-lg hover:shadow-brightBlue-500/50"
        } 
        ${
          variant === "ghost" &&
          "bg-transparent hover:bg-gray-100 text-gray-700 shadow-none"
        } 
        active:motion-scale-in-[0.8]  active:motion-duration-[1.5s]/scale 
        motion-ease-spring-bouncy hover:motion-scale-out-105
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5"}
        ${loading ? "cursor-not-allowed" : ""}
        group
      `}
    >
      {/* Button Text and Icon */}
      <span
        className={`
          flex items-center gap-2
          ${loading ? "opacity-0" : "opacity-100"}
          transition-opacity duration-200
        `}
      >
        {text}
        {Icon && <Icon />}
      </span>

      {/*Loading Spinner */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center gap-4">
          Loading
          <Loader2 className="w-5 h-5 motion-preset-spin" />
        </span>
      )}

      {/* Slide animation */}
      {!loading && !disabled && (
        <div className="absolute inset-0 overflow-hidden rounded pointer-events-none">
          <div
            className={`
              absolute inset-0
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              transition-transform duration-1000
            `}
          />
        </div>
      )}

      {/*Glow Effect */}
      {!loading && !disabled && (
        <div className="absolute inset-0 rounded animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/10" />
      )}
    </button>
  );
};

export default Button;
