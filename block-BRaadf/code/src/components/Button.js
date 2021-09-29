import React from "react";
import { DarkConsumer } from "./DarkContext";

export default function SwitchButton({ isDarkMode, changeMode }) {
  
  return (
    <DarkConsumer>
      {(value) => {
        return (
          <button
            className={`btn ${value.isDarkMode ? "btn-dark" : "btn-light"}`}
            onClick={value.changeMode}
          >
            {value.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        );
      }}
    </DarkConsumer>
  );
}
