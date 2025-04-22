import React from "react";
import Navbar from "./assets/navbar"
import Home from "./pages/home"
import AboutMe from "./pages/aboutme"
import Gallery from "./pages/gallery"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;
