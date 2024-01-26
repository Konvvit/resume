import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Colorselector from "./Components/Colorselector/Colorselector";
import "./App.css";

function App() {
  const [isColorSelectorVisible, setColorSelectorVisibility] = useState(false);

  const toggleColorSelector = () => {
    console.log("Toggle color selector");
    setColorSelectorVisibility(!isColorSelectorVisible);
  };

  return (
    <Router>
      <Container className="top_60">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Header />
            <div className="main-content container_shadow">
              <Colorselector
                isColorSelectorVisible={isColorSelectorVisible}
                toggleColorSelector={toggleColorSelector}
              />
              <Routes>
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
              </Routes>
            </div>

            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
