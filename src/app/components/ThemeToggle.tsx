import React from "react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "light" ? false : true;
    setIsDark(isDarkMode);
    if (savedTheme !== "light") {
      document.documentElement.classList.add("dark");
      if (!savedTheme) localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-[#000] dark:text-gray-300 font-medium">다크모드</span>
      <button
        onClick={toggleTheme}
        className="relative w-14 h-7 bg-gray-300 dark:bg-[#4DB8CC] rounded-full transition-colors duration-400 flex items-center"
        aria-label="Toggle theme"
      >
        <div className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-400 flex items-center justify-center ${isDark ? 'translate-x-7' : 'translate-x-0.5'}`}>
          {isDark ? (
            <Moon className="w-4 h-4 text-[#4DB8CC]" />
          ) : (
            <Sun className="w-4 h-4 text-[#07394A]" />
          )}
        </div>
      </button>
    </div>
  );
}