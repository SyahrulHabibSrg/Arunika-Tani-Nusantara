import React, { useState } from "react"

const WisataComponents = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? totalSlides : currentSlide - 1);
  };

  return (
    <div id="slide-container" style={{ position: "relative", width: "100%" }}>
      <div
        className="container"
        style={{ display: currentSlide === 1 ? "flex" : "none" }}
      >
        <div className="column">
          <img src="src/assets/wisata/1.png" alt="Wisata 1" />
          <h3>Wisata Alam Mangrove Pandang Tak Jemu</h3>
          <p>
            Keindahan alam dan keasrian ekosistem mangrove berpadu. Di sini,
            Anda akan disuguhkan pemandangan hijau yang menyejukkan mata,
            sekaligus mengenal lebih dekat ekosistem mangrove yang kaya manfaat.
            Wisata ini cocok bagi Anda yang mencari ketenangan dan ingin
            menikmati suasana alam yang asri sambil menyusuri jembatan kayu di
            tengah pepohonan mangrove.
          </p>
        </div>
        <div className="column">
          <img src="src/assets/wisata/wisata2.png" alt="Wisata 2" />
          <h3>View Pemandangan Laut Dan Pesisir</h3>
          <p>
            View Pemandangan Laut Dan pesisir Pantai Hutan Mangrove selain
            pantainya juga dapat Menikmati Sunset dengan View Pemandangan negara
            Jiran Yaitu Singapura dan Malaysia.
          </p>
        </div>
        <div className="column">
          <img src="src/assets/wisata/wisata3.png" alt="Wisata 3" />
          <h3>Edukasi Ekosistem Pesisir</h3>
          <p>
            Keunikan ekosistem pesisir di Mangrove Pandang Tak Jemu melalui
            wisata edukasi. Di sini, Anda dapat memahami pentingnya ekosistem
            pesisir sebagai benteng alami dari erosi dan badai, serta rumah bagi
            beragam flora dan fauna. Edukasi ini membawa Anda lebih dekat pada
            keanekaragaman hayati yang berharga dan mengajak Anda ikut berperan
            aktif dalam menjaga keseimbangan lingkungan.
          </p>
        </div>
      </div>

      <div
        className="container"
        style={{ display: currentSlide === 2 ? "flex" : "none" }}
      >
        <div className="column">
          <img src="src/assets/wisata/wisata4.png" alt="Wisata 4" />
          <h3>Jelajahi Pesisir Dengan Boat</h3>
          <p>
            Nikmati pengalaman unik menyusuri pesisir mangrove menggunakan boat
            yang akan membawa Anda menjelajahi keindahan ekosistem pesisir dari
            dekat. Selama perjalanan, Anda akan dapat melihat beragam flora dan
            fauna khas mangrove sambil merasakan kesejukan udara laut. Aktivitas
            ini tidak hanya memberi pengalaman menyenangkan, tetapi juga
            meningkatkan kesadaran akan pentingnya pelestarian mangrove bagi
            lingkungan.
          </p>
        </div>
        <div className="column">
          <img src="src/assets/wisata/wisata5.png" alt="Wisata 5" />
          <h3>Penanaman Mangrove</h3>
          <p>
            Ikuti pengalaman menanam mangrove di Mangrove Pandang Tak Jemu!
            Kegiatan ini tak hanya seru, tetapi juga bermakna dalam menjaga
            keseimbangan ekosistem pesisir. Para pengunjung akan dipandu untuk
            menanam bibit mangrove, memahami pentingnya pohon mangrove dalam
            mencegah erosi dan melindungi habitat satwa laut. Dengan
            berpartisipasi, Anda turut serta dalam pelestarian lingkungan
            sekaligus menciptakan kenangan yang bermanfaat bagi alam dan masa
            depan.
          </p>
        </div>
        <div className="column">
          <img src="src/assets/wisata/wisata6.png" alt="Wisata 6" />
          <h3>Kegiatan Outbond</h3>
          <p>
            Outbound di Mangrove Pandang Tak Jemu menawarkan pengalaman seru dan
            edukatif di tengah alam. Pengunjung dapat mengikuti berbagai
            kegiatan fisik yang melatih kerjasama, ketangkasan, dan kepemimpinan
            sambil menikmati keindahan hutan mangrove. Aktivitas ini cocok bagi
            semua kalangan, mulai dari anak-anak hingga dewasa, dengan
            instruktur yang berpengalaman untuk memastikan keamanan dan
            kenyamanan.
          </p>
        </div>
      </div>

      <button onClick={prevSlide} className="slide-button-wisata left-butt-wisata">
        <img src="src/assets/wisata/button.png" alt="" />
      </button>
      <button onClick={nextSlide} className="slide-button-wisata right-butt-wisata">
        <img src="src/assets/wisata/button.png" alt="" />
      </button>
    </div>
  );
};

export default WisataComponents
