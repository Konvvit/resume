import React, { useState } from "react";
import "./Colorselector.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

// ColorSelector component
const ColorSelector = ({ isColorSelectorVisible, toggleColorSelector }) => {
  const defaultResetButtonColor = "#ffc500"; // Set your default color here

  const handleColorChange = (selectedColor) => {
    document.documentElement.style.setProperty("--main-color", selectedColor);
    updateResetButtonColor(selectedColor);
  };
  // Function to handle color change
  const updateResetButtonColor = (color) => {
    const resetButton = document.querySelector(".reset");
    if (resetButton) {
      resetButton.style.backgroundColor = color;
    }
  };

  // Function to update reset button color
  const handleReset = () => {
    // Reset to default color
    document.documentElement.style.setProperty(
      "--main-color",
      defaultResetButtonColor
    );

    // Update reset button color
    updateResetButtonColor(defaultResetButtonColor);
  };

  return (
    <div className={`demo ${isColorSelectorVisible ? "" : "visible"}`}>
      <a href="#" className="settings" onClick={toggleColorSelector}>
        <FontAwesomeIcon icon={faCog} spin />
      </a>
      <h5>Select a Color</h5>
      <a
        href="#orangeyellow"
        className="color"
        data-color="#F9BC2F"
        style={{ backgroundColor: "#F9BC2F" }}
        onClick={() => handleColorChange("#F9BC2F")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Cadmium Orange"
        className="color"
        data-color="#FD8D30"
        style={{ backgroundColor: "#FD8D30" }}
        onClick={() => handleColorChange("#FD8D30")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Orange Soda"
        className="color"
        data-color="#F4613E"
        style={{ backgroundColor: "#F4613E" }}
        onClick={() => handleColorChange("#F4613E")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Light Pink"
        className="color"
        data-color="#FFB6C1"
        style={{ backgroundColor: "#FFB6C1" }}
        onClick={() => handleColorChange("#FFB6C1")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Mystic"
        className="color"
        data-color="#E13F79"
        style={{ backgroundColor: "#E13F79" }}
        onClick={() => handleColorChange("#E13F79")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Maya blue"
        className="color"
        data-color="#87CEFA"
        style={{ backgroundColor: "#87CEFA" }}
        onClick={() => handleColorChange("#87CEFA")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Granny smith Apple"
        className="color"
        data-color="#ACD68B"
        style={{ backgroundColor: "#ACD68B" }}
        onClick={() => handleColorChange("#ACD68B")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Purple Plum"
        className="color"
        data-color="#9554C8"
        style={{ backgroundColor: "#9554C8" }}
        onClick={() => handleColorChange("#9554C8")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Slate Gray"
        className="color"
        data-color="#6C7F93"
        style={{ backgroundColor: "#6C7F93" }}
        onClick={() => handleColorChange("#6C7F93")}
      >
        {/* Hidden content for accessibility */}
      </a>
      <a
        href="#Blue Gray"
        className="color"
        data-color="#799ACC"
        style={{ backgroundColor: "#799ACC" }}
        onClick={() => handleColorChange("#799ACC")}
      >
        {/* Hidden content for accessibility */}
      </a>
      {/* Add more color options as needed */}
      <hr />
      <a
        href="#reset"
        className="reset btn btn-sm btn-info p-l-30 p-r-30"
        onClick={handleReset}
      >
        Reset
      </a>
    </div>
  );
};

export default ColorSelector;
