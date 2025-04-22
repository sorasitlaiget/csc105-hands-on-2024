import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "gallery", "contact"];
      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between p-4 items-center">
      <h1 className="text-xl font-bold">Sorasit</h1>
      <div className="flex-grow flex justify-center space-x-6">
        <button
          onClick={() => scrollToSection("home")}
          className={`px-3 py-2 rounded-lg ${activeSection === "home" ? "bg-yellow-300" : "hover:bg-gray-200"}`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`px-3 py-2 rounded-lg ${activeSection === "about" ? "bg-yellow-300" : "hover:bg-gray-200"}`}
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("gallery")}
          className={`px-3 py-2 rounded-lg ${activeSection === "gallery" ? "bg-yellow-300" : "hover:bg-gray-200"}`}
        >
          Gallery
        </button>
      </div>
      <button
        onClick={() => scrollToSection("contact")}
        className={`px-3 py-2 rounded-lg ${activeSection === "contact" ? "bg-yellow-300" : "bg-yellow-400"}`}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
