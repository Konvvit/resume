import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/" element={<Resume />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
