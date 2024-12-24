import React, { useState, forwardRef } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

type InputProps = {
  label?: string;
  error?: string;
  startIcon?: React.ComponentType;
  endIcon?: React.ComponentType;
  clearable?: boolean;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      startIcon: StartIcon,
      endIcon: EndIcon,
      clearable = false,
      type = "text",
      placeholder,
      disabled = false,
      required = false,
      className = "",
      value,
      onChange,
      onClear,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const handleClear = () => {
      onClear?.();
      onChange?.("");
    };

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <div
            className={`flex items-center rounded border transition-all duration-300 
              ${
                error
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }
              ${
                isFocused && !error
                  ? "border-blue-500 ring-2 ring-blue-500/20"
                  : ""
              }
              ${
                disabled
                  ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                  : "hover:border-blue-400 dark:hover:border-blue-400"
              }
            `}
          >
            {StartIcon && (
              <div className="text-gray-400 p-2 dark:text-gray-500 ">
                <StartIcon />
              </div>
            )}

            <input
              ref={ref}
              type={showPassword ? "text" : type}
              className={`flex-1 py-2 px-3 text-gray-800  bg-transparent outline-none placeholder:text-gray-400
                dark:bg-gray-800 dark:text-gray-300
                disabled:cursor-not-allowed disabled:opacity-50
                ${StartIcon ? "pl-2" : ""}
                ${EndIcon || type === "password" || clearable ? "pr-10" : ""}
              `}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required={required}
              {...props}
            />
            <div className="flex items-center gap-1">
              {clearable && value && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaTimes className="h-4 w-4 m-2" />
                </button>
              )}
              {type === "password" && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-4 w-4 m-1" />
                  ) : (
                    <FaEye className="h-4 w-4 m-1" />
                  )}
                </button>
              )}
              {EndIcon && (
                <div className="text-gray-400 dark:text-gray-500 p-2">
                  <EndIcon />
                </div>
              )}
            </div>
          </div>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
