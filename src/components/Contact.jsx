import { useState } from "react";
import data from "../assets/data.json";
import { colors, fonts, artStyles } from "../styles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Ganti dengan endpoint Formspree atau backend Anda
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        backgroundColor: colors.light,
        position: "relative",
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: fonts.secondary,
            fontSize: "clamp(2rem, 5vw, 3rem)",
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
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            "@media (min-width: 992px)": {
              flexDirection: "row",
            },
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              flex: 1,
              textAlign: "left",
              padding: "2rem",
              backgroundColor: colors.background,
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              ...artStyles.watercolor,
              minHeight: "100%",
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
              {/* Email */}
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
                    flexShrink: 0,
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
                      wordBreak: "break-all",
                      ":hover": {
                        color: colors.accent,
                      },
                    }}
                  >
                    {data.personal.contact.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
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
                    flexShrink: 0,
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
                    WhatsApp
                  </p>
                  <a
                    href={data.personal.contact.phone} // Langsung pakai link WhatsApp
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
                    +62 823-3857-3092
                  </a>
                </div>
              </div>

              {/* Social Media */}
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
                    flexShrink: 0,
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
                      flexWrap: "wrap",
                      alignItems: "center",
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
                        paddingRight: "1rem",
                        borderRight: `1px solid ${colors.text}`,
                        opacity: 1,
                        marginRight: "0",
                        height: "60%",
                        display: "flex",
                        alignItems: "center",
                        ":hover": {
                          color: colors.accent,
                          opacity: 0.9,
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

          {/* Contact Form */}
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
              Send Message
            </h3>

            {submitStatus === "success" && (
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(46, 125, 50, 0.2)",
                  color: "#2e7d32",
                  borderRadius: "4px",
                  marginBottom: "1.5rem",
                  border: "1px solid #2e7d32",
                }}
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(211, 47, 47, 0.2)",
                  color: "#d32f2f",
                  borderRadius: "4px",
                  marginBottom: "1.5rem",
                  border: "1px solid #d32f2f",
                }}
              >
                Oops! Something went wrong. Please try again later.
              </div>
            )}

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
                  minLength="2"
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
                  minLength="10"
                  style={{
                    padding: "0.75rem",
                    border: `1px solid ${colors.secondary}`,
                    borderRadius: "5px",
                    fontFamily: fonts.primary,
                    resize: "vertical",
                    minHeight: "150px",
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
                disabled={isSubmitting}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: isSubmitting
                    ? colors.secondary
                    : colors.primary,
                  color: colors.light,
                  border: "none",
                  borderRadius: "50px",
                  fontFamily: fonts.primary,
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: isSubmitting
                      ? colors.secondary
                      : colors.accent,
                    transform: isSubmitting ? "none" : "translateY(-3px)",
                  },
                  ":disabled": {
                    opacity: 0.7,
                    cursor: "not-allowed",
                  },
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <p
                style={{
                  textAlign: "left",
                  color: "#333",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                  margin: "0.5rem 0",
                }}
              >
                I'm very sorry because this form can't functioning as it expect.
                This new feature is under development right now :)
              </p>
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
          zIndex: -1,
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
          zIndex: -1,
        }}
      ></div>
    </section>
  );
};

export default Contact;
