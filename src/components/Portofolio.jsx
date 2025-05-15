import { useState } from "react";
import data from "../assets/data.json";
import { colors, fonts, artStyles } from "../styles";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject.image.length
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProject.image.length) %
        selectedProject.image.length
    );
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: "4rem 2rem",
        backgroundColor: colors.background,
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: fonts.secondary,
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: colors.dark,
            position: "relative",
            display: "inline-block",
            left: "50%",
            transform: "translateX(-50%)",
            ":after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "0",
              width: "100%",
              height: "4px",
              background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
              borderRadius: "2px",
            },
          }}
        >
          My Portfolio
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {data.projects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: colors.light,
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                ":hover": {
                  transform: "translateY(-10px)",
                  boxShadow: `0 15px 30px rgba(0,0,0,0.2)`,
                },
              }}
              onClick={() => openProject(project)}
            >
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={project.image[0]} // Tampilkan gambar pertama sebagai thumbnail
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "white",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    fontSize: "0.8rem",
                  }}
                >
                  {project.image.length} photos
                </div>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: fonts.primary,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                    color: colors.dark,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: fonts.primary,
                    color: colors.text,
                    marginBottom: "1rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: colors.secondary,
                        color: colors.light,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "50px",
                        fontSize: "0.75rem",
                        fontFamily: fonts.primary,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal dengan Slider */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "2rem",
          }}
          onClick={closeProject}
        >
          <div
            style={{
              backgroundColor: colors.background,
              borderRadius: "10px",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "2rem",
              position: "relative",
              ...artStyles.watercolor,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeProject}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: colors.dark,
                ":hover": {
                  color: colors.accent,
                },
              }}
            >
              ×
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {/* Slider Container */}
              <div
                style={{
                  height: "400px",
                  overflow: "hidden",
                  borderRadius: "5px",
                  position: "relative",
                }}
              >
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 10,
                    transition: "all 0.3s ease",
                    ":hover": {
                      background: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  &lt;
                </button>

                {/* Current Image */}
                <img
                  src={selectedProject.image[currentImageIndex]}
                  alt={`${selectedProject.title} - Slide ${
                    currentImageIndex + 1
                  }`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    backgroundColor: colors.light,
                    transition: "opacity 0.3s ease",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect fill='%23" +
                      colors.primary.replace("#", "") +
                      "' width='800' height='400'/%3E%3Ctext fill='%23ffffff' font-family='" +
                      fonts.primary +
                      "' font-size='50' dy='.3em' text-anchor='middle' x='400' y='200'%3EImage not found%3C/text%3E%3C/svg%3E";
                  }}
                />

                <button
                  onClick={nextImage}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 10,
                    transition: "all 0.3s ease",
                    ":hover": {
                      background: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  &gt;
                </button>

                {/* Image Indicators */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {selectedProject.image.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        backgroundColor:
                          index === currentImageIndex
                            ? colors.accent
                            : "rgba(255,255,255,0.5)",
                        transition: "all 0.3s ease",
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3
                  style={{
                    fontFamily: fonts.secondary,
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    color: colors.primary,
                  }}
                >
                  {selectedProject.title}
                </h3>
                <p
                  style={{
                    fontFamily: fonts.primary,
                    color: colors.text,
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  {selectedProject.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: colors.primary,
                        color: colors.light,
                        padding: "0.5rem 1rem",
                        borderRadius: "50px",
                        fontSize: "0.85rem",
                        fontFamily: fonts.primary,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: colors.accent,
                    color: colors.light,
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontFamily: fonts.primary,
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    ":hover": {
                      backgroundColor: colors.primary,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  Visit Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
