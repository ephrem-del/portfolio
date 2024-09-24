"use client";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string | null>(null);

  function toggleClick() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  }

  useEffect(() => {
    const currentTheme =
      localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light");
    setTheme(currentTheme);
  }, []);

  return (
    <button
      onClick={toggleClick}
      className="rounded-full shadow-lg shadow-gray-50 p-1 cursor-pointer "
    >
      {theme == "light" ? (
        <FaMoon className="size-6 desktop:size-10 " />
      ) : (
        <FaSun className="size-6 desktop:size-10 " color="gray" />
      )}
    </button>
  );
};

export default ToggleTheme;
