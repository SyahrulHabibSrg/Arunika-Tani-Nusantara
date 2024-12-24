import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";
import React, { useState, useEffect } from "react";
import NewsComponents from "../components/NewsComponents";

const BeritaPage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      imgSrc: "public/assets/berita/1.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "public/assets/berita/slide2.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "public/assets/berita/slide3.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "public/assets/berita/slide4.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "public/assets/berita/slide5.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
  ];

  const showSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div>
      <NavbarComponents />;
      <div className="hero">
        <img
          src="public/assets/berita/hero.png"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero1-content">
          <h3>Berita</h3>
          <p>Ekowisata Mangrove Desa Wisata Kampung Tua Bakau Serip</p>
          <div className="hero1-button1">
            <a href="#news">
              <button className="hero1-button">
                {" "}
                Jelajahi Sekarang{" "}
                <span className="arrow-icon">
                  <i className="fas fa-angle-right"></i>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="news-section" id="news">
        <h2>Berita Terbaru dari Kampung Tua Bakau Serip!</h2>
        <p>
          Tetap terinformasi dengan berita terbaru seputar perkembangan Kampung
          Tua Bakau Serip. Dari wisata hingga kegiatan edukasi, <br /> ikuti
          perjalanan kami dalam menjaga kehidupan dan kelestarian ekosistem
          mangrove serta menjamin ekowisata berkelanjutan.
        </p>
        <div className="news-container">
          <div className="news-slider">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`news-slide ${
                  currentSlideIndex === index ? "active" : ""
                }`}
                style={{
                  display: currentSlideIndex === index ? "block" : "none",
                }}
              >
                <img src={slide.imgSrc} alt={slide.caption} />
                <div className="slide-caption">
                  <a href={slide.link}>{slide.caption}</a>
                </div>
              </div>
            ))}
            <div className="dot-news-container">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot-news ${
                    currentSlideIndex === index ? "active" : ""
                  }`}
                  onClick={() => showSlide(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="news-solo">
            <img src="public/assets/berita/2.png" alt="" />
            <div className="news-details">
              <p>
                Menparekraf Dorong Desa Wisata Kampung Tua Bakau Serip Jadi
                Destinasi Ekowisata Pilihan di Batam
              </p>
              <div className="news-meta">
                <span>31 Mei 2022</span>
                <img src="public/assets/berita/news1.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
        <NewsComponents />
      </div>
      <FooterComponents />
    </div>
  );
};

export default BeritaPage;
