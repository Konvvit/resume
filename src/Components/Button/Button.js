import { Button } from "@mui/material";
import React from "react";
import "./Button.css";

const CustomButton = ({ text, icon, onClick }) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      style={{ color: "black" }}
      onClick={onClick}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
