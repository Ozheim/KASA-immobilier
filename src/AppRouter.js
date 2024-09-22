import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FichesLogement from "./pages/FichesLogement";
import NotFound from "./pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="fiches-logement/:id" element={<FichesLogement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
