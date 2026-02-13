function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-soft">
      <div className="container">

        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem" }}>Packages & Pricing</h2>
          <p className="text-muted px-3">
            All include fully edited digital images with online gallery.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {/* SILVER */}
          <div className="col-md-6 col-lg-4">
            <div className="pricing-card">
              <div className="pricing-title">Silver</div>
              <div className="pricing-price">
                ₹35K <small>Only</small>
              </div>

              <ul className="feature-list">
                <li><i className="fas fa-check-circle"></i> 6 hrs coverage</li>
                <li><i className="fas fa-check-circle"></i> 1 photographer</li>
                <li><i className="fas fa-check-circle"></i> 300+ edited photos</li>
                <li><i className="fas fa-check-circle"></i> Online gallery</li>
                <li><i className="fas fa-check-circle"></i> Engagement included</li>
              </ul>

              <a href="#contact" className="btn btn-pricing w-100">
                Enquire
              </a>
            </div>
          </div>

          {/* GOLD (Highlighted Plan) */}
          <div className="col-md-6 col-lg-4">
            <div
              className="pricing-card"
              style={{ border: "2px solid rgba(196,93,66,0.3)" }}
            >
              <div className="pricing-title">Gold</div>
              <div className="pricing-price">
                ₹65K <small>Only</small>
              </div>

              <ul className="feature-list">
                <li><i className="fas fa-check-circle"></i> 12 hrs coverage</li>
                <li><i className="fas fa-check-circle"></i> 2 photographers</li>
                <li><i className="fas fa-check-circle"></i> 600+ edited photos</li>
                <li><i className="fas fa-check-circle"></i> Drone shots</li>
                <li><i className="fas fa-check-circle"></i> Cinematic highlight (3m)</li>
                <li><i className="fas fa-check-circle"></i> Paithani detail</li>
              </ul>

              <a
                href="#contact"
                className="btn btn-pricing w-100"
                style={{
                  background: "#c45d42",
                  color: "white",
                  borderColor: "#c45d42",
                }}
              >
                Most Loved
              </a>
            </div>
          </div>

          {/* PLATINUM */}
          <div className="col-md-6 col-lg-4">
            <div className="pricing-card">
              <div className="pricing-title">Platinum</div>
              <div className="pricing-price">
                ₹99K <small>Only</small>
              </div>

              <ul className="feature-list">
                <li><i className="fas fa-check-circle"></i> Full day coverage</li>
                <li><i className="fas fa-check-circle"></i> 2 photographers + assistant</li>
                <li><i className="fas fa-check-circle"></i> 1000+ edited photos</li>
                <li><i className="fas fa-check-circle"></i> Drone + gimbal video</li>
                <li><i className="fas fa-check-circle"></i> 5-min cinematic film</li>
                <li><i className="fas fa-check-circle"></i> Premium album (20 pages)</li>
              </ul>

              <a href="#contact" className="btn btn-pricing w-100">
                Enquire
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;
