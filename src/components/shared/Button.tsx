import React from "react";
import { Loader2 } from "lucide-react";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  Icon?: React.ComponentType;
  loading?: boolean;
};

const Button = ({
  disabled = false,
  onClick,
  text,
  Icon,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
    relative inline-flex items-center justify-center px-6 py-3 font-semibold  rounded transition-all duration-300 transform
    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 text-light shadow-lg hover:shadow-blue-500/50
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-0.5"}
        ${loading ? "cursor-not-allowed" : ""}
        group
      `}
    >
      <span
        className={`
        flex items-center gap-2
        ${loading ? "opacity-0" : "opacity-100"}
        transition-opacity duration-200
      `}
      >
        {Icon && <Icon />}
        {text}
      </span>

      {loading && (
        <span className="absolute inset-0 flex items-center justify-center gap-4">
          Loading
          <Loader2 className="w-5 h-5 animate-spin" />
        </span>
      )}

      {!loading && !disabled && (
        <div className="absolute inset-0 overflow-hidden rounded">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      )}

      {!loading && !disabled && (
        <div className="absolute inset-0 rounded animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/10" />
      )}
    </button>
  );
};

export default Button;
