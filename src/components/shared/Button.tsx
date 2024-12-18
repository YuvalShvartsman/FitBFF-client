type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  text: string;
};

const Button = ({ disabled, onClick, text }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-100 text-light"
    >
      {text}
    </button>
  );
};

export default Button;
