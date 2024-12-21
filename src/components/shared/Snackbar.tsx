import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { MdWarning } from "react-icons/md";

type SnackbarProps = {
  title: string;
  type: "success" | "warning" | "error";
  description: string;
  placement: "topRight" | "topLeft" | "bottomRight" | "bottomLeft" | "center";
  autoClose: boolean;
} & (
  | { autoClose: true; duration: number }
  | { autoClose?: false; duration?: never }
);

const Snackbar = ({
  title,
  type,
  description,
  placement,
  autoClose = false,
  duration,
}: SnackbarProps) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  const typeStyles = {
    success: {
      container: "bg-green-100 border-green-500 text-green-800",
      progress: "bg-green-500",
      icon: <AiOutlineCheckCircle className="text-green-500" size={24} />,
    },
    warning: {
      container: "bg-gold-100 border-gold-500 text-gold-800",
      progress: "bg-gold-500",
      icon: <MdWarning className="text-gold-500" size={24} />,
    },
    error: {
      container: "bg-red-100 border-red-500 text-red-800",
      progress: "bg-red-500",
      icon: <BiErrorCircle className="text-red-500" size={24} />,
    },
  };

  const placementStyles = {
    topRight: "top-4 right-4",
    topLeft: "top-4 left-4",
    bottomRight: "bottom-4 right-4",
    bottomLeft: "bottom-4 left-4",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  useEffect(() => {
    if (autoClose && duration) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) return 0;
          return prev - 100 / (duration / 10);
        });
      }, 10);

      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [autoClose, duration]);

  if (!visible) return null;

  return (
    <div
      className={`fixed z-50 ${placementStyles[placement]} flex flex-col p-4 border-l-4 rounded-md shadow-md max-w-sm ${typeStyles[type].container}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">{typeStyles[type].icon}</div>
        <div className="ml-3 flex-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="ml-3 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <AiOutlineCloseCircle size={24} />
        </button>
      </div>
      {autoClose && duration && (
        <div className="mt-3 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${typeStyles[type].progress} transition-all duration-100 ease-linear`}
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      )}
    </div>
  );
};

export default Snackbar;
