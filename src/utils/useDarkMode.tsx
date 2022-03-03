import React from "react";

export type ColorTheme = "dark" | "light";

const html = document.documentElement;

export const useDarkMode = (theme: ColorTheme) => {
  React.useEffect(() => {
    if (theme === "light") {
      html.dataset.theme = theme;
      return;
    }

    html.dataset.theme = theme;
  }, [theme]);
};
