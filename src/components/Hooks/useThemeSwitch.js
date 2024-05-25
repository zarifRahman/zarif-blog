"use client";
import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-schema:dark)";
  const storageKey = "theme";

  // These lines declare two constants:
  // preferDarkQuery: This string holds a media query that checks if the user's browser prefers dark mode.
  // storageKey: This string is used as the key to store the user's theme preference in the browser's localStorage.

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };
  // This code defines a function named getUserPreference that retrieves the user's theme preference.
  // It first checks if a theme preference already exists in localStorage using the storageKey.
  // If it does (meaning userPref is not null), it returns the stored theme preference.
  // Otherwise, it uses the window.matchMedia API with the preferDarkQuery to determine if the user's browser prefers dark mode.
  // If the user prefers dark mode, it returns "dark"; otherwise, it returns "light".

  const [mode, setMode] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    // `window.matchMedia` is a powerful browser API that allows you to check if the current
    // state of the browser window matches a specific media query
    
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
