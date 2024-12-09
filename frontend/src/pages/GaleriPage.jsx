import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";

const GaleriPage = () => {
  return (
    <div>
      <NavbarComponents />
      <div className="hero">
        <img
          src="src/assets/galeri/galeri.png"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero1-content">
          <h3>Galeri Foto & Video</h3>
          <p>Ekowisata Mangrove Desa Wisata Kampung Tua Bakau Serip</p>
          <div className="hero1-button1">
            <a href="#gallery">
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

      <div className="gallery-section" id="gallery">
        <h2>Jelajahi Keindahan Desa Wisata dalam Galeri Kami!</h2>
        <p>
          Saksikan keunikan serta keindahan di Kampung Tua Bakau Sirep melalui
          galeri foto dan videonya. Temukan momen-momen <br />
          menawan dari wisata, budaya, dan aktivitas masyarakat yang mendukung
          pengembangan desa agar maju.
        </p>

        <div className="gallery-cards">
          <div className="gallery-card">
            <img src="src/assets/berita/2.png" alt="" />
            <div className="card-content">
              <p>Anugerah Desa Wisata Indonesia ADWI 2022</p>
            </div>
          </div>
          <div className="gallery-card">
            <img src="src/assets/berita/2.png" alt="" />
            <div className="card-content">
              <p>Anugerah Desa Wisata Indonesia API 2022</p>
            </div>
          </div>
          <div className="gallery-card">
            <img src="src/assets/berita/2.png" alt="" />
            <div className="card-content">
              <p>Anugerah Desa Wisata Indonesia LADM 2022</p>
            </div>
          </div>
        </div>

        <div className="gallery-description">
          <h3>Anugerah Desa Wisata Indonesia (ADWI) 2022</h3>
          <p className="date">June 2024</p>
          <p>
            Menteri Pariwisata dan Ekonomi Kreatif/Kepala Badan Pariwisata dan
            Ekonomi Kreatif (Menparekraf/Kabaparekraf) Sandiaga Salahuddin Uno
            mendorong Desa Wisata Kampung Tua Bakau Serip yang masuk dalam 50
            besar Anugerah Desa Wisata Indonesia (ADWI) 2022 menjadi destinasi
            ekowisata pilihan bagi wisatawan baik nusantara juga mancanegara di
            Batam, Kepulauan Riau. <br />
            <br />
            Menparekraf Sandiaga mengatakan Desa Wisata Kampung Tua Bakau Serip
            memiliki potensi wisata alam yang kuat karena memiliki ekowisata
            hutan bakau Pandang Tak Jemu. Desa wisata ini juga memiliki kekayaan
            tradisi budaya dan sektor ekonomi kreatif yang beraneka ragam.
            Seperti kerajinan tangan dari kerang dan eceng gondok, juga kuliner
            khas seperti olahan gonggong. 
            <br />
            <br />
            Desa Wisata Kampung Tua Bakau Serip ini juga memiliki keunggulan
            karena jarak yang cukup dekat dari Bandara Internasional Hang Nadim,
            sekitar 14,2 kilometer. Dengan keunggulan itu Kampung Tua Bakau
            Serip bisa menjadi destinasi studi banding bagi siswa sekolah dari
            Singapura. <br />
            <br />
            "Ini adalah bagian dari kebangkitan ekonomi kita dan ada beberapa
            terobosan yang kita bisa kolaborasikan dengan Konsulat Jenderal
            Singapura di mana anak-anak sekolah yang libur di Singapura bisa
            mengunjungi Kampung Tua Bakau Serip dan belajar tentang konservasi,
            edukasi tentang ekonomi kreatif, budaya, dan lain sebagainya," kata
            Menparekraf Sandiaga dalam kunjungannya ke Desa Wisata Kampung Tua
            Bakau Serip, Selasa (31/5/2022). <br />
            <br />
            Sandiaga mengungkapkan ADWI 2022 diharapkan mampu meningkatkan
            potensi-potensi yang ada sehingga membuka peluang usaha dan lapangan
            kerja bagi warga Kampung Tua Bakau Serip. 
          </p>
        </div>
        <div className="photo-gallery">
          <img src="src/assets/galeri/4.png" alt="" />
          <img src="src/assets/galeri/5.png" alt="" />
          <img src="src/assets/galeri/6.png" alt="" />
          <img src="src/assets/galeri/7.png" alt="" />
          <img src="src/assets/galeri/8.png" alt="" />
          <img src="src/assets/galeri/9.png" alt="" />
          <img src="src/assets/galeri/10.png" alt="" />
          <img src="src/assets/galeri/11.png" alt="" />
          <img src="src/assets/galeri/12.png" alt="" />
        </div>
        <div className="gallery-video-container">
          <iframe
            src="https://www.youtube.com/embed/XJmoxU0l4Hc"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <FooterComponents />
      </div>
    </div>
  );
};

export default GaleriPage;
