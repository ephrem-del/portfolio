"use client";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  function toggleClick() {}

  useEffect(() => {}, []);

  return (
    <button onClick={toggleClick}>
      {theme == "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ToggleTheme;
