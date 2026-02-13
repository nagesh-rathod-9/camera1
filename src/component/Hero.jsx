import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";

function Hero() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 20 });
  }, []);

  return (
    <section id="home" className="hero">

      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        effect="fade"
        speed={1200}
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        className="heroSwiper"
      >

        {/* Slide 1 */}
        <SwiperSlide
          className="hero-slide"
          style={{
            backgroundImage: "url('/img4.jpg')",
          }}
        >
          <div className="overlay"></div>

          <div className="hero-content" data-aos="fade-up">
            <span className="hero-sub">
              <i className="fas fa-leaf me-2"></i>
              Capturing Maharashtra's Essence
            </span>

            <h1>
              Rudraksh <span>Karandikar</span>
            </h1>

            <p>
              Preserving traditions, one frame at a time —
              Authentic Maharashtrian storytelling.
            </p>

            <a href="#gallery" className="btn-hero">
              View Gallery
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          className="hero-slide"
          style={{
            backgroundImage: "url('/wed1.jpg')",
          }}
        >
          <div className="overlay"></div>

          <div className="hero-content" data-aos="fade-up">
            <span className="hero-sub">
              <i className="fas fa-heart me-2"></i>
              Wedding Moments
            </span>

            <h1>
              Timeless <span>Memories</span>
            </h1>

            <p>
              Every ritual, every smile —
              captured with artistic perfection.
            </p>

            <a href="#gallery" className="btn-hero">
              Explore Work
            </a>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Hero;
