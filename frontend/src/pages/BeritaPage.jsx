import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";
import React, { useState, useEffect } from "react";

const BeritaPage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      imgSrc: "src/assets/berita/1.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "src/assets/berita/slide2.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "src/assets/berita/slide3.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "src/assets/berita/slide4.png",
      link: "https://www.indonesia.travel/id/id/ide-liburan/jelajahi-pesona-pesisir-nongsa-di-kampung-tua-bakau-serip-batam.html",
      caption:
        "Jelajahi Pesona Pesisir Nongsa di Kampung Tua Bakau Serip, Batam",
    },
    {
      imgSrc: "src/assets/berita/slide5.png",
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
          src="src/assets/berita/hero.png"
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
            <img src="src/assets/berita/2.png" alt="" />
            <div className="news-details">
              <p>
                Menparekraf Dorong Desa Wisata Kampung Tua Bakau Serip Jadi
                Destinasi Ekowisata Pilihan di Batam
              </p>
              <div className="news-meta">
                <span>31 Mei 2022</span>
                <img src="src/assets/berita/news1.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="news-grid">
          <div className="news-item">
            <a href="https://disbudpar.batam.go.id/2022/06/02/kampung-tua-bakau-serip-batam-masuk-50-besar-desa-wisata-terbaik/">
              <img
                src="src/assets/berita/logo-news1.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/3.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>
                Kampung Tua Bakau Serip Batam Masuk 50 Besar Desa Wisata Terbaik
              </h3>
              <p>02 Juni 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://disbudpar.batam.go.id/2023/08/07/kemenparekraf-serahkan-bantuan-boat-untuk-desa-wisata-kampung-tua-bakau-serip/">
              <img
                src="src/assets/berita/logo-news1.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/4.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>
                Kemenparekraf Serahkan Bantuan Boat untuk Desa Wisata Kampung
                Tua Bakau Serip
              </h3>
              <p>07 Agustus 2023</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://www.polibatam.ac.id/pmm-batch-4-dari-mahasiswa-se-nusantara-untuk-masyarakat-batam/">
              <img
                src="src/assets/berita/logo-news2.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/5.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>
                PMM Batch 4 Dari Mahasiswa Se-Nusantara Untuk Masyarakat Batam
              </h3>
              <p>16 Juli 2024</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://ugm.ac.id/id/berita/23159-kampung-tua-bakau-serip-mitra-riset-psek-ugm-raih-penghargaan-desa-wisata-2022/">
              <img
                src="src/assets/berita/logo-news3.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/6.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>Kegiatan Bersama Pelajar untuk Edukasi Ekosistem Mangrove</h3>
              <p>11 November 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://travel.kompas.com/read/2022/06/02/102159427/kampung-tua-bakau-serip-di-batam-masuk-50-besar-adwi-2022">
              <img
                src="src/assets/berita/logo-news4.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/7.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>Kampung Tua Bakau Serip di Batam Masuk 50 Besar ADWI 2022</h3>
              <p>02 Juni 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://news.republika.co.id/berita/rcrych396/sandi-desa-wisata-kampung-tua-bakau-serip-tawarkan-wisata-konservasi">
              <img
                src="src/assets/berita/logo-news5.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/8.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>Kegiatan Bersama Pelajar untuk Edukasi Ekosistem Mangrove</h3>
              <p>01 Juni 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://www.tempo.co/hiburan/kunjungi-desa-wisata-mangrove-sandiaga-uno-coba-aktivitas-seru-untuk-wisatawan-345588">
              <img
                src="src/assets/berita/logo-news6.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/9.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>Kegiatan Bersama Pelajar untuk Edukasi Ekosistem Mangrove</h3>
              <p>01 Juni 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://www.antaranews.com/berita/2911285/kampung-tua-bakau-serip-berpotensi-tarik-pelajar-dari-singapura">
              <img
                src="src/assets/berita/logo-news7.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/10.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>Kegiatan Bersama Pelajar untuk Edukasi Ekosistem Mangrove</h3>
              <p>31 Mei 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://nationalgeographic.grid.id/read/133715180/sehalaman-dari-batam-cerita-benteng-pesisir-kampung-tua-bakau-serip?page=all">
              <img
                src="src/assets/berita/logo-news8.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/11.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>
                Sehalaman dari Batam, Cerita Benteng Pesisir Kampung Tua Bakau
                Serip
              </h3>
              <p>09 Maret 2023</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://kepri.pikiran-rakyat.com/wisata/pr-2688425613/kampung-tua-bakau-serip-di-nongsa-batam-dari-tempat-sampah-jadi-desa-wisata-berkelas?page=all">
              <img
                src="src/assets/berita/logo-news9.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/12.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>
                Kampung Tua Bakau Serip di Nongsa Batam, Dari Tempat Sampah Jadi
                Desa Wisata Berkelas
              </h3>
              <p>09 Agustus 2024</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://batam.tribunnews.com/2022/11/01/sosok-pejuang-wisata-batam-kampung-tua-bakau-serip-raih-prestasi-adwi-2022?page=all#google_vignette">
              <img
                src="src/assets/berita/logo-news10.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/13.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>
                Sosok Pejuang Wisata Batam Kampung Tua Bakau Serip Raih Prestasi
                ADWI 2022
              </h3>
              <p>01 November 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://www.kompasiana.com/cucum-suminar/636fbe644addee2fcc226f12/menjelajah-desa-wisata-kampung-tua-bakau-serip-batam?page=7&page_images=1">
              <img
                src="src/assets/berita/logo-news11.png"
                alt="Logo"
                className="news-logo"
              />
              <img
                src="src/assets/berita/14.png"
                alt="News Thumbnail"
                className="thumbnail"
              />
              <h3>Menjelajah Desa Wisata Kampung Tua Bakau Serip, Batam</h3>
              <p>12 November 2022</p>
            </a>
          </div>
        </div>
      </div>
      <FooterComponents />
    </div>
  );
};

export default BeritaPage;
