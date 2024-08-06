// Import necessary React components and hooks
import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Colorselector from "./Components/Colorselector/Colorselector";
import AppRoutes from "./routes/Routes";
import "./App.css";
import store from "./redux/notistore";

// Define the main App component
function App() {
  // State to manage the visibility of the color selector
  const [isColorSelectorVisible, setColorSelectorVisibility] = useState(false);

  // Function to toggle the visibility of the color selector
  const toggleColorSelector = () => {
    console.log("Toggle color selector");
    setColorSelectorVisibility(!isColorSelectorVisible);
  };

  // Render the main component
  return (
    <Provider store={store}>
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
                <AppRoutes />
              </div>

              {/* Footer component */}
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Router>
    </Provider>
  );
}

// Export the App component as the default export
export default App;
