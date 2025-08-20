import React, { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.style.backgroundColor = dark ? "#fff" : "#121212";
    document.body.style.color = dark ? "#000" : "#fff";
  };

  return (
    <button
      onClick={toggleTheme}
      style={{ position: "absolute", top: 10, right: 10, padding: "8px" }}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
