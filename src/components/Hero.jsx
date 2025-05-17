import data from "../assets/data.json";
import { colors, fonts, artStyles } from "../styles";
import profilePhoto from "../assets/images/your-photo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: colors.light,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "800px",
          zIndex: 1,
        }}
      >
        {/* Container untuk foto profil */}
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: "2rem",
            border: `5px solid ${colors.accent}`,
            boxShadow: `0 10px 20px rgba(0,0,0,0.3)`,
            ...artStyles.brushStroke,
          }}
        >
          <img
            src={profilePhoto}
            alt={data.personal.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              top: 0,
              left: 0,
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23" +
                colors.accent.replace("#", "") +
                "' width='100%' height='100%'/%3E%3Ctext fill='%23ffffff' font-family='" +
                fonts.primary +
                "' font-size='50' dy='.3em' text-anchor='middle' x='100' y='100'%3E" +
                data.personal.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("") +
                "%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: fonts.secondary,
            fontSize: "2rem",
            marginBottom: "1rem",
            color: colors.dark,
            lineHeight: 1.2,
          }}
        >
          {data.personal.name}
        </h1>

        <h2
          style={{
            fontFamily: fonts.primary,
            fontSize: "1rem",
            fontWeight: "bolder",
            color: colors.primary,
            marginBottom: "1rem",
          }}
        >
          {data.personal.tagline}
        </h2>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1.3rem",
          }}
        >
          <a
            href="#portfolio"
            style={{
              padding: "0.75rem 0.9rem",
              backgroundColor: colors.primary,
              color: colors.light,
              borderRadius: "50px",
              textDecoration: "none",
              fontFamily: fonts.primary,
              fontWeight: "600",
              fontSize: "0.8rem",

              transition: "all 0.3s ease",
              ":hover": {
                backgroundColor: colors.accent,
                transform: "translateY(-3px)",
              },
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.75rem 0.9rem",
              backgroundColor: "transparent",
              color: colors.primary,
              border: `2px solid ${colors.primary}`,
              borderRadius: "50px",
              textDecoration: "none",
              fontFamily: fonts.primary,
              fontWeight: "600",
              fontSize: "0.8rem",
              transition: "all 0.3s ease",
              ":hover": {
                backgroundColor: colors.primary,
                color: colors.light,
                transform: "translateY(-3px)",
              },
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: colors.secondary,
          opacity: 0.3,
          filter: "blur(30px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: colors.accent,
          opacity: 0.2,
          filter: "blur(40px)",
        }}
      ></div>
    </section>
  );
};

export default Hero;
