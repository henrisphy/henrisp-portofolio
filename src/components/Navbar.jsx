import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import data from "../assets/data.json";
import { colors, fonts } from "../styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Cek ukuran layar saat komponen mount dan saat resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Style reusable
  const linkStyle = {
    textDecoration: "none",
    color: colors.text,
    fontFamily: fonts.primary,
    fontWeight: "bold",
    transition: "all 0.3s ease",
    padding: "0.5rem 1rem",
    ":hover": {
      color: colors.accent,
      transform: "translateY(-2px)",
    },
  };

  const mobileLinkStyle = {
    ...linkStyle,
    fontSize: "1.2rem",
    textAlign: "center",
    display: "block",
    width: "100%",
  };

  const socialIconStyle = {
    color: "#000000",
    fontSize: "1.5rem",
    transition: "all 0.3s ease",
    ":hover": {
      color: colors.accent,
      transform: "scale(1.1)",
    },
  };

  return (
    <>
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

        {/* Desktop Menu - Tampil hanya di desktop */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="#home" style={linkStyle}>
                Home
              </a>
              <a href="#portfolio" style={linkStyle}>
                Portfolio
              </a>
              <a href="#contact" style={linkStyle}>
                Contact
              </a>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginLeft: "1rem" }}>
              <a
                href={data.personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
              >
                <FaGithub />
              </a>
              <a
                href={data.personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu Button - Tampil hanya di mobile */}
        {isMobile && (
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              color: colors.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        )}
      </nav>

      {/* Mobile Menu Popup */}
      {isMobile && isOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            backgroundColor: colors.background,
            zIndex: 999,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <a
            href="#home"
            style={mobileLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#portfolio"
            style={mobileLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            style={mobileLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "1rem",
              paddingTop: "1.5rem",
              borderTop: `1px solid ${colors.primary}20`,
            }}
          >
            <a
              href={data.personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
              onClick={() => setIsOpen(false)}
            >
              <FaGithub />
            </a>
            <a
              href={data.personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
              onClick={() => setIsOpen(false)}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}

      {/* Tambahkan style untuk animasi */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
