import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Button from "./Button";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  size: "small" | "medium" | "large";
  allowClickOutside: boolean;
  title?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  actionLabel?: string;
  cancelLabel?: string;
  onAction?: () => void;
  actionDisabled?: boolean;
  actionVariant?: "primary" | "danger";
};

const Modal = ({
  open,
  handleClose,
  size,
  allowClickOutside,
  title,
  children,
  showCloseButton = true,
  actionLabel,
  cancelLabel = "Cancel",
  onAction,
  actionDisabled = false,
}: ModalProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    } else {
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match this with your animation duration
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, handleClose]);

  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (allowClickOutside && e.target === e.currentTarget) {
      handleClose();
    }
  };

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center overflow-y-auto 
        transition-all duration-300
        ${
          open
            ? "bg-gray-900/50 backdrop-blur-sm"
            : "bg-gray-900/0 backdrop-blur-none"
        }
      `}
      onClick={handleBackdropClick}
    >
      <div
        className={`
          motion-preset-slide-right-lg
          relative w-full ${
            sizeClasses[size]
          } transform rounded bg-light dark:bg-dark shadow-xl 
          transition-all duration-700 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-6">
            {title && (
              <h3 className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-100">
                {title}
              </h3>
            )}
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="rounded-full p-1.5 text-gray-500 hover:bg-brightBlue-50 hover:text-brightBlue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-brightBlue-300 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-6 text-gray-800 dark:text-gray-200">
          {children}
        </div>

        {/* Action Buttons */}
        {(actionLabel || cancelLabel) && (
          <div className="flex items-center justify-end gap-3 border-t border-gray-200 dark:border-gray-700 px-6 py-6">
            {cancelLabel && (
              <Button
                onClick={handleClose}
                text={cancelLabel}
                variant="ghost"
              />
            )}
            {actionLabel && onAction && (
              <Button
                onClick={onAction}
                disabled={actionDisabled}
                text={actionLabel}
                variant="primary"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
