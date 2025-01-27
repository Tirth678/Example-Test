import React, { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div
        onClick={toggleMenu}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "30px",
          height: "20px",
          cursor: "pointer",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "#ffffff",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(45deg) translateY(8px)" : "none",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "#ffffff",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            opacity: isOpen ? 0 : 1,
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "#ffffff",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(-45deg) translateY(-8px)" : "none",
          }}
        ></div>
      </div>

      {/* Menu Links */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: isOpen ? "0" : "-100%",
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          width: "200px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "right 0.3s ease",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          zIndex: 5,
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            fontSize: "18px",
            margin: "10px 0",
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            fontSize: "18px",
            margin: "10px 0",
          }}
        >
          About
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            fontSize: "18px",
            margin: "10px 0",
          }}
        >
          Services
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            fontSize: "18px",
            margin: "10px 0",
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default HamburgerMenu;
