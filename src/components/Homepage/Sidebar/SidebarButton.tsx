interface SidebarButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const SidebarButton = ({ label, onClick, icon }: SidebarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-start gap-6 w-full text-left p-2 rounded-md text-2xl
       max-laptop:justify-center max-laptop:mt-5 max-phone:mt-0 
       text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <span className=" max-laptop:text-4xl">{icon}</span>

      <span className=" max-laptop:hidden">{label}</span>
    </button>
  );
};

export default SidebarButton;
