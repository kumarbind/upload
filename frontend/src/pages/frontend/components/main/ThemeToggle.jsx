import React from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border dark:border-white border-gray-700"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />} {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;