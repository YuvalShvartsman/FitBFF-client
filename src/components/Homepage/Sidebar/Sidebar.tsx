import { useState } from "react";
import SidebarButton from "./SidebarButton";
import { FaUserCircle, FaCrown, FaCog, FaMoon, FaSun } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  };

  const handleWorkoutsClick = () => {
    console.log("Workouts clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleLeaderboardClick = () => {
    console.log("Leaderboard clicked");
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  const sidebarButtons = [
    {
      title: "Workouts",
      icon: <GiBiceps className="text-gold-500" />,
      onClick: handleWorkoutsClick,
    },
    {
      title: "Profile",
      icon: <FaUserCircle className="text-blue-100 dark:text-light" />,
      onClick: handleProfileClick,
    },
    {
      title: "Leaderboard",
      icon: <FaCrown className="text-gold-200" />,
      onClick: handleLeaderboardClick,
    },
    {
      title: "Settings",
      icon: <FaCog className="text-gray-500" />,
      onClick: handleSettingsClick,
    },
    {
      title: isDarkMode ? "Light Mode" : "Dark Mode",
      icon: isDarkMode ? (
        <FaSun className="text-yellow-300" />
      ) : (
        <FaMoon className="text-blue-500" />
      ),
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="flex flex-col h-screen p-4 text-white w-72 self-start fixed border-r-[3px] border-gray-100 dark:border-gray-600">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-4xl font-bold dark:text-light">Fit BuFF</h2>
        </div>

        <div className="flex-1">
          <div className="pt-2 pb-4 text-sm">
            {sidebarButtons.map((button, index) => (
              <SidebarButton
                key={index}
                label={button.title}
                onClick={button.onClick}
                icon={button.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
