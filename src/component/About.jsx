import { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="section-padding bg-soft">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image Section */}
          <div
            className="col-md-5 text-center"
            data-aos="fade-right"
          >
            <div className="position-relative d-inline-block">
              <img
                src="/cameraman.jpg"
                alt="Rudraksh Karandikar"
                className="img-fluid profile-img"
                style={{
                  maxHeight: "520px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            className="col-md-7 ms-3 ms-lg-0 px-lg-0"
            data-aos="fade-left"
          >
            <h2 style={{ fontSize: "2.4rem" }}>
              I'm Rudraksh Karandikar
            </h2>

            <div
              className="fs-5 fst-italic text-secondary mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              "Documenting the soul of Maharashtra"
            </div>

            <p
              className="fw-light"
              style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
            >
              Born in Pune, raised in the Sahyadris. With over 12 years of
              experience documenting weddings, engagements, and cultural
              festivals across Maharashtra. My work blends tradition with
              modern storytelling — capturing emotions, rituals, and timeless
              memories.
            </p>

            {/* Badge Section */}
            <div className="mt-4 d-flex flex-wrap gap-2">

              <span
                style={{
                  background: "#c45d4220",
                  padding: "8px 18px",
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                }}
              >
                <i
                  className="fas fa-award me-2"
                  style={{ color: "#c45d42" }}
                ></i>
                50+ Weddings
              </span>

              <span
                style={{
                  background: "#c45d4220",
                  padding: "8px 18px",
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                }}
              >
                <i
                  className="fas fa-location-dot me-2"
                  style={{ color: "#c45d42" }}
                ></i>
                Pune / Mumbai
              </span>

              <span
                style={{
                  background: "#c45d4220",
                  padding: "8px 18px",
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                }}
              >
                <i
                  className="fas fa-camera me-2"
                  style={{ color: "#c45d42" }}
                ></i>
                12+ Years Experience
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
