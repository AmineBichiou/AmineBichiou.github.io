import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Main = () => {
  useEffect(() => {
    // Function to manage theme changes
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Get the saved theme or fallback to system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (prefersDarkScheme.matches ? "dark-mode" : "light-mode");

    // Apply the saved theme
    document.body.classList.add(savedTheme);

    // Add listener to handle theme change when system preference changes
    const handleThemeChange = (e) => {
      document.body.classList.toggle("dark-mode", e.matches);
      document.body.classList.toggle("light-mode", !e.matches);
    };

    prefersDarkScheme.addEventListener("change", handleThemeChange);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      prefersDarkScheme.removeEventListener("change", handleThemeChange);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
