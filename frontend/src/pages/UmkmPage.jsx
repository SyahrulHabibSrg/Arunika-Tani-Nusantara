import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";
import UMKM from "../components/UMKM";

const UmkmPage = () => {
  return (
    <div>
      <NavbarComponents />
      <div className="hero">
        <img
          src="src/assets/umkm.png"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero1-content">
          <h3>UMKM</h3>
          <p>Ekowisata Mangrove Desa Wisata Kampung Tua Bakau Serip</p>
          <div className="hero1-button1">
            <a href="#umkm">
              <button className="hero1-button">
                {" "}
                Jelajahi Sekarang{" "}
                <div className="arrow-icon">
                  <i className="fas fa-angle-right"></i>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="umkm-section" id="umkm">
        <h2>Dukung UMKM Desa Wisata Kampung Tua Bakau Serip!</h2>
        <p>
          Temukan keunikan produk lokal mereka dan jadikan kunjungan Anda
          berarti dengan mendukung usaha-usaha kecil di sini. <br /> Ayo, datang
          dan kenali ragam UMKM yang menawarkan produk kreatif dan berkualitas.
        </p>
        <UMKM/>
        </div>
      <FooterComponents />
    </div>
  );
};

export default UmkmPage;
