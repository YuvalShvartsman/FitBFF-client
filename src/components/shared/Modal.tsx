import React, { useEffect } from "react";
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

  if (!open) return null;

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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900/50 backdrop-blur-sm transition-all"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full ${sizeClasses[size]} transform rounded bg-light dark:bg-dark shadow-xl transition-all`}
        role="dialog"
        aria-modal="true"
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            {title && (
              <h3 className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-100">
                {title}
              </h3>
            )}
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="rounded-full p-1.5 text-gray-500 hover:bg-blue-50 hover:text-blue-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-300 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4 text-gray-800 dark:text-gray-200">
          {children}
        </div>

        {/* Action Buttons */}
        {(actionLabel || cancelLabel) && (
          <div className="flex items-center justify-end gap-3 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
            {cancelLabel && (
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              >
                {cancelLabel}
              </button>
            )}
            {actionLabel && onAction && (
              <Button
                onClick={onAction}
                disabled={actionDisabled}
                text={actionLabel}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
