import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom"; // Correctly import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleHireMeClick = () => {
    console.log("Hire Me button clicked!");
    navigate("/Contact"); // Navigate to the Contact page
  };

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className="header_link"
            activeClassName="header_link_active"
          >
            Resume
          </Nav.Link>
        </Nav>

        <Nav>
          {/* Portfolio link */}
          <Nav.Link
            as={NavLink}
            to="/Portfolio"
            className="header_link"
            activeClassName="header_link_active"
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <Nav>
          {/* Contact link */}
          <Nav.Link
            as={NavLink}
            to="/Contact"
            className="header_link"
            activeClassName="header_link_active"
          >
            Contact
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {/* Social media links */}
          {Object.keys(resumeData.socials).map((key) => (
            <a
              key={key}
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}

          {/* Custom button */}
          <CustomButton
            text={"Hire me"}
            icon={<TelegramIcon />}
            onClick={handleHireMeClick}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
