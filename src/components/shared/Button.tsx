type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  text: string;
  Icon?: React.ComponentType;
  loading: boolean;
};

const Button = ({ disabled, onClick, text, Icon }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className=" bg-blue-100 text-light rounded w-44 h-8 after:bg-light"
      >
        {text}
      </button>
      {Icon && <Icon />}
    </div>
  );
};

export default Button;
