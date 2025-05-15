import { useState } from "react";
import data from "../assets/data.json";
import { colors, fonts, artStyles } from "../styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: colors.background,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        ...artStyles.watercolor,
      }}
    >
      <div
        style={{
          fontFamily: fonts.secondary,
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: colors.primary,
        }}
      >
        {data.personal.name}
      </div>

      {/* Mobile menu button */}
      <div
        style={{
          display: "none",
          cursor: "pointer",
          "@media (max-width: 768px)": {
            display: "block",
          },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Desktop Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          "@media (max-width: 768px)": {
            display: isOpen ? "flex" : "none",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            flexDirection: "column",
            backgroundColor: colors.background,
            padding: "1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          },
        }}
      >
        <a
          href="#home"
          style={{
            textDecoration: "none",
            color: colors.text,
            fontFamily: fonts.primary,
            fontWeight: "500",
            ":hover": {
              color: colors.accent,
            },
          }}
        >
          Home
        </a>
        <a
          href="#portfolio"
          style={{
            textDecoration: "none",
            color: colors.text,
            fontFamily: fonts.primary,
            fontWeight: "500",
            ":hover": {
              color: colors.accent,
            },
          }}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          style={{
            textDecoration: "none",
            color: colors.text,
            fontFamily: fonts.primary,
            fontWeight: "500",
            ":hover": {
              color: colors.accent,
            },
          }}
        >
          Contact
        </a>
      </div>

      {/* Social Links */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          "@media (max-width: 768px)": {
            display: isOpen ? "flex" : "none",
            position: "absolute",
            top: "calc(100% + 120px)",
            left: 0,
            right: 0,
            justifyContent: "center",
            padding: "1rem",
          },
        }}
      >
        <a
          href={data.personal.links.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: colors.text,
            fontSize: "1.5rem",
            ":hover": {
              color: colors.accent,
            },
          }}
        >
          GitHub
        </a>
        <a
          href={data.personal.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: colors.text,
            fontSize: "1.5rem",
            ":hover": {
              color: colors.accent,
            },
          }}
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
