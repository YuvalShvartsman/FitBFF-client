interface SidebarButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const SidebarButton = ({ label, onClick, icon }: SidebarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-6 w-full text-left text-2xl p-2 rounded-md bg 
       text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {icon}
      {label}
    </button>
  );
};

export default SidebarButton;
