// Import necessary React components and hooks
import React, { useState, Provider } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Colorselector from "./Components/Colorselector/Colorselector";
import Contact from "./Pages/Contact/Contact";
import "./App.css";
import store from "./redux/notistore";

// Define the main App component
function App() {
  <Provider store={store}>{/* Your app components */}</Provider>;
  // State to manage the visibility of the color selector
  const [isColorSelectorVisible, setColorSelectorVisibility] = useState(false);

  // Function to toggle the visibility of the color selector
  const toggleColorSelector = () => {
    console.log("Toggle color selector");
    setColorSelectorVisibility(!isColorSelectorVisible);
  };

  // Render the main component
  return (
    <Router>
      {/* Main container with top margin */}
      <Container className="top_60">
        {/* Grid layout */}
        <Grid container spacing={7}>
          {/* Left column for Profile */}
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>

          {/* Right column for Header, Main Content, and Footer */}
          <Grid item xs>
            {/* Header component */}
            <Header />
            {/* Main content container with shadow */}
            <div className="main-content container_shadow">
              {/* Color selector component */}
              <Colorselector
                isColorSelectorVisible={isColorSelectorVisible}
                toggleColorSelector={toggleColorSelector}
              />

              {/* Routing for different pages */}
              <Routes>
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>

            {/* Footer component */}
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

// Export the App component as the default export
export default App;
