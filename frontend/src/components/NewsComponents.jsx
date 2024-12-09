import React, { useState, useEffect } from "react";

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
    {
      img: "src/assets/berita/1.png",
      caption: "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="news-container">
      <div className="news-slider">
        {slides.map((slide, index) => (
          <div
            className={`news-slide ${
              index === currentSlide ? "active" : ""
            }`}
            key={index}
          >
            <img src={slide.img} alt={slide.caption} />
            <div className="slide-caption">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                {slide.caption}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="dot-news-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot-news ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default NewsSlider
