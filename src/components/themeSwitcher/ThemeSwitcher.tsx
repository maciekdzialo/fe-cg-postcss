import React from "react";
import { ColorTheme, useDarkMode } from "../../utils/useDarkMode";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState<ColorTheme>("light");
  useDarkMode(theme);
  return (
    <div className="ThemeSwitcher">
      <button onClick={() => setTheme("dark")} className="ThemeSwitcher__button">
        Dark Mode
      </button>
      <button onClick={() => setTheme("light")} className="ThemeSwitcher__button">
        Light Mode
      </button>
    </div>
  );
};
