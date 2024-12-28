import { useState } from "react";

import { FaUserCircle, FaCrown, FaCog, FaMoon, FaSun } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";

import SidebarButton from "./SidebarButton";

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
    <div
      className="flex h-screen p-4 text-white fixed border-r-[3px] flex-col 
       w-72 max-laptop:w-32  max-phone:h-24 max-phone:w-full
       max-phone:bottom-0 max-phone:bg-dark max-phone:justify-center max-phone:border-t-2 max-phone:border-r-0
     border-gray-100 dark:border-gray-600 z-20"
    >
      <div className="space-y-3">
        <div className="flex items-center">
          <h2
            className="font-bold dark:text-light
          text-4xl max-laptop:text-2xl max-phone:hidden"
          >
            Fit BuFF
          </h2>
        </div>

        <div className="flex-1">
          <div className="pt-2 pb-4 text-sm max-phone:flex max-phone:z-50">
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
