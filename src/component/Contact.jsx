import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_b1jpq9y",
        "template_1ctiy3f",
        form.current,
        "YaVToBy0NQ52agcKs",
      )
      .then(
        () => {
          setLoading(false);
          setShowSuccess(true);
          form.current.reset();
          setTimeout(() => setShowSuccess(false), 4000);
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row g-1 align-items-stretch">
          {/* LEFT SIDE */}
          <div className="col-12 col-lg-6 d-flex ">
            <div className="contact-left w-100 d-flex flex-column text-start">
              <div>
                <h2 className="mb-3">
                  Let's create <br />
                  your legacy
                </h2>

                <p className="mb-4">
                  I reply within 12 hours.
                  <span className="fw-bold text-primary">
                    {" "}
                    Free consultation{" "}
                  </span>
                  for first 5 bookings.
                </p>

                <div className="contact-details mb-4">
                  <p>
                    <i className="fas fa-map-pin me-2 text-primary"></i>
                    Pune | Mumbai | Nashik
                  </p>
                  <p>
                    <i className="fas fa-phone-alt me-2 text-primary"></i>
                    +91 94220 37185
                  </p>
                  <p>
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    rudraksh.k@maharashtraframes.com
                  </p>
                </div>

                <div className="mb-4">
                  <a href="#" className="social-icon me-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon me-2">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              {/* MAP */}
              <div className="mt-auto">
                <iframe
                  title="location"
                  src="https://www.google.com/maps?q=Pune&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "20px" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="contact-form w-100 d-flex flex-column justify-content-between text-center text-lg-start">
              <div>
                <h4 className="mb-4">Send a message</h4>

                <form ref={form} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <input
                        type="text"
                        name="from_name"
                        className="form-control"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Mobile number"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        name="from_email"
                        className="form-control"
                        placeholder="Email address"
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Event type / subject"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Tell me about your vision..."
                        required
                      />
                    </div>
                  </div>

                  <button className="btn-submit mt-4 w-100" disabled={loading}>
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {showSuccess && (
                  <div className="demo-success-alert mt-4">
                    ✅ Message sent successfully! I’ll contact you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
