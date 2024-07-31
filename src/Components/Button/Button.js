// Button.js
import { Button } from "@mui/material";
import React from "react";
import "./Button.css";

// CustomButton component
const CustomButton = ({ text, icon, type }) => {
  return (
    <Button
      type={type} // Set the button type to allow for form submission
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      style={{ color: "black" }}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

// Exporting the CustomButton component
export default CustomButton;
