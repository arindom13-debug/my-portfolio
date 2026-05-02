function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#030712",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 48px",
          borderBottom: "1px solid #1f2937",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(3, 7, 18, 0.8)",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Arindom<span style={{ color: "#7c3aed" }}>.</span>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          <a
            href="#services"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Services
          </a>
          <a
            href="#work"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Work
          </a>
          <a
            href="#contact"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          style={{
            backgroundColor: "#7c3aed",
            color: "white",
            padding: "10px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Hire me
        </a>
      </nav>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: "672px" }}>
          <p
            style={{
              fontSize: "13px",
              color: "#c084fc",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Available for freelance work
          </p>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              lineHeight: "1.2",
              margin: "0 0 24px 0",
            }}
          >
            I build fast, modern websites
            <span style={{ color: "#7c3aed" }}> that convert.</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#9ca3af",
              lineHeight: "1.7",
              marginBottom: "32px",
            }}
          >
            Landing pages, SaaS sites, and dashboard UIs — delivered in days,
            not weeks.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#work"
              style={{
                backgroundColor: "#7c3aed",
                color: "white",
                padding: "12px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              See my work
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid #374151",
                color: "#d1d5db",
                padding: "12px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "40px 48px",
          borderTop: "1px solid #1f2937",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "24px",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {[
            { number: "10+", label: "Projects Delivered" },
            { number: "3", label: "Days Avg. Delivery" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "$0", label: "Hidden Fees" },
          ].map((stat, i) => (
            <div key={i}>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#7c3aed",
                  margin: "0 0 4px 0",
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        style={{ padding: "80px 48px", borderTop: "1px solid #1f2937" }}
      >
        <p
          style={{
            color: "#7c3aed",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          What I do
        </p>
        <h2
          style={{ fontSize: "36px", fontWeight: "bold", margin: "0 0 48px 0" }}
        >
          Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Landing Pages",
              desc: "High-converting landing pages for your product or service. Delivered in 3–5 days.",
              price: "From $199",
            },
            {
              title: "SaaS Websites",
              desc: "Full marketing sites for SaaS products with pricing, features, and waitlist.",
              price: "From $399",
            },
            {
              title: "Website Redesign",
              desc: "Transform your outdated website into a modern, professional design.",
              price: "From $299",
            },
            {
              title: "Dashboard UI",
              desc: "Clean, functional dashboard and admin panel interfaces for your product.",
              price: "From $499",
            },
          ].map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#0f172a",
                border: "1px solid #1f2937",
                borderRadius: "12px",
                padding: "28px",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: "0 0 12px 0",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                {service.desc}
              </p>
              <p
                style={{
                  color: "#7c3aed",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        style={{ padding: "80px 48px", borderTop: "1px solid #1f2937" }}
      >
        <p
          style={{
            color: "#7c3aed",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Portfolio
        </p>
        <h2
          style={{ fontSize: "36px", fontWeight: "bold", margin: "0 0 48px 0" }}
        >
          My Work
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "TaskFlow — SaaS Landing Page",
              tag: "SaaS",
              color: "#7c3aed",
              image: "/taskflow.png",
              link: "https://taskflow-swart-one.vercel.app",
            },
            {
              title: "Restaurant Website Redesign",
              tag: "Redesign",
              color: "#059669",
              image: "/restaurant.png",
              link: "https://restaurant-tau-rust.vercel.app",
            },
            {
              title: "Analytics Dashboard UI",
              tag: "Dashboard",
              color: "#0284c7",
              image: null,
              link: "#",
            },
          ].map((project, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#0f172a",
                border: "1px solid #1f2937",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {project.image ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </a>
              ) : (
                <div
                  style={{
                    height: "180px",
                    backgroundColor: project.color + "11",
                    border: `1px solid ${project.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: project.color,
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Coming soon
                  </span>
                </div>
              )}
              <div style={{ padding: "20px" }}>
                <span
                  style={{
                    backgroundColor: project.color + "22",
                    color: project.color,
                    fontSize: "11px",
                    padding: "3px 10px",
                    borderRadius: "99px",
                    fontWeight: "500",
                  }}
                >
                  {project.tag}
                </span>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "10px 0 0 0",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 48px", borderTop: "1px solid #1f2937" }}>
        <p
          style={{
            color: "#7c3aed",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Testimonials
        </p>
        <h2
          style={{ fontSize: "36px", fontWeight: "bold", margin: "0 0 48px 0" }}
        >
          What clients say
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              quote:
                "Arindom delivered our landing page in 4 days. Clean, fast, and exactly what we wanted.",
              name: "Sarah K.",
              role: "SaaS Founder",
            },
            {
              quote:
                "Best freelancer I have worked with. Understood the brief immediately and nailed the design.",
              name: "James T.",
              role: "Startup CEO",
            },
            {
              quote:
                "Our website redesign increased conversions by 40%. Highly recommend Arindom.",
              name: "Maria L.",
              role: "E-commerce Owner",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#0f172a",
                border: "1px solid #1f2937",
                borderRadius: "12px",
                padding: "28px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  color: "#fbbf24",
                  fontSize: "18px",
                  marginBottom: "16px",
                }}
              >
                ★★★★★
              </p>
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                "{t.quote}"
              </p>
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: "0",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                  margin: "4px 0 0 0",
                }}
              >
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "80px 48px",
          borderTop: "1px solid #1f2937",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#7c3aed",
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Get in touch
        </p>
        <h2
          style={{ fontSize: "36px", fontWeight: "bold", margin: "0 0 16px 0" }}
        >
          Let's work together
        </h2>
        <p style={{ color: "#9ca3af", fontSize: "18px", marginBottom: "32px" }}>
          Have a project in mind? I'd love to hear about it.
        </p>
        <a
          href="mailto:alexgaminglol1111@gmail.com"
          style={{
            backgroundColor: "#7c3aed",
            color: "white",
            padding: "14px 40px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Send me an email
        </a>
      </section>

      <footer
        style={{
          borderTop: "1px solid #1f2937",
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
          © 2026 Arindom. All rights reserved.
        </p>
        <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
          Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
