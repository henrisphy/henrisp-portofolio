import { useState } from "react";
import data from "../assets/data.json";
import { colors, fonts, artStyles } from "../styles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        backgroundColor: colors.light,
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: fonts.secondary,
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: colors.dark,
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            fontFamily: fonts.primary,
            color: colors.text,
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            "@media (min-width: 768px)": {
              flexDirection: "row",
            },
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "left",
              padding: "2rem",
              backgroundColor: colors.background,
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              ...artStyles.watercolor,
            }}
          >
            <h3
              style={{
                fontFamily: fonts.primary,
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: colors.primary,
              }}
            >
              Contact Information
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: colors.secondary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.light,
                    fontSize: "1.25rem",
                  }}
                >
                  ✉️
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: fonts.primary,
                      fontWeight: "600",
                      color: colors.dark,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${data.personal.contact.email}`}
                    style={{
                      fontFamily: fonts.primary,
                      color: colors.text,
                      textDecoration: "none",
                      ":hover": {
                        color: colors.accent,
                      },
                    }}
                  >
                    {data.personal.contact.email}
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: colors.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.light,
                    fontSize: "1.25rem",
                  }}
                >
                  📱
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: fonts.primary,
                      fontWeight: "600",
                      color: colors.dark,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href={`tel:${data.personal.contact.phone}`}
                    style={{
                      fontFamily: fonts.primary,
                      color: colors.text,
                      textDecoration: "none",
                      ":hover": {
                        color: colors.accent,
                      },
                    }}
                  >
                    {data.personal.contact.phone}
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: colors.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.light,
                    fontSize: "1.25rem",
                  }}
                >
                  🔗
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: fonts.primary,
                      fontWeight: "600",
                      color: colors.dark,
                      marginBottom: "0.25rem",
                    }}
                  >
                    Social Media
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <a
                      href={data.personal.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: fonts.primary,
                        color: colors.text,
                        textDecoration: "none",
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
                        fontFamily: fonts.primary,
                        color: colors.text,
                        textDecoration: "none",
                        ":hover": {
                          color: colors.accent,
                        },
                      }}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: "2rem",
              backgroundColor: colors.background,
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              ...artStyles.watercolor,
            }}
          >
            <h3
              style={{
                fontFamily: fonts.primary,
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: colors.primary,
              }}
            >
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: fonts.primary,
                    color: colors.dark,
                    fontWeight: "500",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.75rem",
                    border: `1px solid ${colors.secondary}`,
                    borderRadius: "5px",
                    fontFamily: fonts.primary,
                    ":focus": {
                      outline: "none",
                      borderColor: colors.primary,
                      boxShadow: `0 0 0 2px ${colors.secondary}`,
                    },
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: fonts.primary,
                    color: colors.dark,
                    fontWeight: "500",
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.75rem",
                    border: `1px solid ${colors.secondary}`,
                    borderRadius: "5px",
                    fontFamily: fonts.primary,
                    ":focus": {
                      outline: "none",
                      borderColor: colors.primary,
                      boxShadow: `0 0 0 2px ${colors.secondary}`,
                    },
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: fonts.primary,
                    color: colors.dark,
                    fontWeight: "500",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.75rem",
                    border: `1px solid ${colors.secondary}`,
                    borderRadius: "5px",
                    fontFamily: fonts.primary,
                    resize: "vertical",
                    ":focus": {
                      outline: "none",
                      borderColor: colors.primary,
                      boxShadow: `0 0 0 2px ${colors.secondary}`,
                    },
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: colors.primary,
                  color: colors.light,
                  border: "none",
                  borderRadius: "50px",
                  fontFamily: fonts.primary,
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: colors.accent,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: colors.accent,
          opacity: 0.1,
          filter: "blur(20px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: colors.primary,
          opacity: 0.1,
          filter: "blur(30px)",
        }}
      ></div>
    </section>
  );
};

export default Contact;
