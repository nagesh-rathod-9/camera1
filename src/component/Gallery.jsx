import { useEffect } from "react";
import AOS from "aos";

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section id="gallery" className="section-padding">
      <div className="container">

        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem" }}>What I Capture</h2>
          <p className="text-muted px-3">
            Every frame tells a story – from rituals to cinematic moments.
          </p>
        </div>

        {/* Tabs */}
        <ul className="nav nav-pills gallery-tabs mb-5 justify-content-center">

          <li className="nav-item">
            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#wedding">
              <i className="fas fa-heart me-2"></i> Wedding
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#engagement">
              <i className="fas fa-ring me-2"></i> Engagement
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#outdoor">
              <i className="fas fa-tree me-2"></i> Outdoor
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#baby">
              <i className="fas fa-baby me-2"></i> Baby Shoot
            </button>
          </li>

        </ul>

        <div className="tab-content">

          {/* Wedding */}
          <div className="tab-pane fade show active" id="wedding">
            <div className="row g-4">
              <GalleryImage src="/wed1.jpg" />
              <GalleryImage src="/wed2.jpg" />
              <GalleryImage src="/wed5.jpg" />
              <GalleryImage src="/wed6.jpg" />
            </div>
          </div>

          {/* Engagement */}
          <div className="tab-pane fade" id="engagement">
            <div className="row g-4">
              <GalleryImage src="/eng1.jpg" />
              <GalleryImage src="/eng2.jpg" />
            </div>
          </div>

          {/* Outdoor */}
          <div className="tab-pane fade" id="outdoor">
            <div className="row g-4">
              <GalleryImage src="/out1.jpg" />
              <GalleryImage src="/out5.jpg" />
              <GalleryImage src="/out3.jpg" />
              <GalleryImage src="/out4.jpg" />
            </div>
          </div>

          {/* Baby */}
          <div className="tab-pane fade" id="baby">
            <div className="row g-4">
              <GalleryImage src="/baby1.jpg" />
              <GalleryImage src="/baby3.jpg" />
              <GalleryImage src="/baby4.jpg" />
              <GalleryImage src="/baby6.jpg" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function GalleryImage({ src }) {
  return (
    <div className="col-md-6 col-lg-6 gallery-item ht">
      <div className="gallery-card">
        <img src={src} className="gallery-img" alt="" />
      </div>
    </div>
  );
}

export default Gallery;
