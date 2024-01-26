import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/*Home link*/}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/*Resume link*/}
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
          {/*Portfolio link*/}
          <Nav.Link
            as={NavLink}
            to="/Portfolio"
            className="header_link"
            activeClassName="header_link_active"
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}

          <CustomButton text={"Hire me"} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
