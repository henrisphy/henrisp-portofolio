import data from "../assets/data.json";
import { colors, fonts } from "../styles";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: colors.dark,
        color: colors.light,
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            fontFamily: fonts.secondary,
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {data.personal.name}
        </div>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <a
            href={data.personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: colors.light,
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
              ":hover": {
                color: colors.accent,
                transform: "translateY(-3px)",
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
              color: colors.light,
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
              ":hover": {
                color: colors.accent,
                transform: "translateY(-3px)",
              },
            }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${data.personal.contact.email}`}
            style={{
              color: colors.light,
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
              ":hover": {
                color: colors.accent,
                transform: "translateY(-3px)",
              },
            }}
          >
            Email
          </a>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.1)",
            margin: "1rem 0",
          }}
        ></div>

        <p
          style={{
            fontFamily: fonts.primary,
            fontSize: "0.9rem",
            opacity: 0.7,
          }}
        >
          © {new Date().getFullYear()} {data.personal.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
