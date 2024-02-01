import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      {/* Left section of the footer */}
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>

      {/* Right section of the footer */}
      <div className="footer_right">
        <Typography className="footer_copyright">
          Developed by{" "}
          <a href="/" target="_blank">
            {" "}
            Konwit Maikhoksung.{" "}
          </a>
          <br />
        </Typography>

        <Typography className="footer_copyright">
          Design inspired by{" "}
          <a href="/" target="_blank">
            {" "}
            Tavonline{" "}
          </a>
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
