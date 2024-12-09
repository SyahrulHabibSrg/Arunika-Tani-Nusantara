import WisataComponents from "../components/WisataComponents";
import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";

const WisataPage = () => {
  return (
    <div>
      <NavbarComponents />
      <div className="hero">
        <img
          src="src/assets/wisata/wisata.png"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero1-content">
          <h3>Wisata</h3>
          <p>Ekowisata Mangrove Desa Wisata Kampung Tua Bakau Serip</p>
          <div className="hero1-button1">
            <a href="#wisata">
              <button className="hero1-button">
                {" "}
                Jelajahi Sekarng{" "}
                <span className="arrow-icon">
                  <i className="fas fa-angle-right"></i>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="wisata" id="wisata">
        <h2>"Wisata Seru, Dekat dan Jauh Menantimu!"</h2>
        <p>
          Tidak yakin ke mana harus pergi untuk perjalanan Anda berikutnya? kami
          punya saran untuk Anda!
        </p>
        <div className="intro-title">
          <h3>Wisata Alam Rekomendasi</h3>
          <p>
            Mangrove Pandang Tak Jemu Menyediakan Wisata Alam Yang tidak kalah
            menarik keindahan alami yang menjadikan daya tarik untuk pengunjung
          </p>
        </div>
      </div>

      <WisataComponents />

      <div className="budaya-title">
        <h3>Wisata Budaya Rekomendasi</h3>
        <p>
          Selain wisata alam ada wisata buatan , wisata buatan identik dengan
          budaya lokal warga kampung tua bakau, selain itu wisata ini sangat di
          rekomendasikan bagi kamu pecinta seni!
        </p>
      </div>
      <div id="container-budaya">
        <div className="container">
          <div className="column">
            <img src="src/assets/wisata/budaya1.png" alt="" />
            <h3>Sanggar Seni Tari Melayu</h3>
            <p>
              Tempat di mana pengunjung dapat menikmati keindahan dan keunikan
              budaya Melayu melalui seni tari tradisional. Sanggar ini
              menghadirkan berbagai pertunjukan tari khas Melayu yang anggun dan
              penuh makna, dipadukan dengan alunan musik tradisional yang merdu.
            </p>
          </div>
          <div className="column">
            <img src="src/assets/wisata/budaya2.png" alt="" />
            <h3>Pentas Seni Budaya Nusantara</h3>
            <p>
              Rasakan keindahan keragaman budaya Indonesia melalui Pentas Seni
              Budaya Nusantara. Di sini, pengunjung dapat menyaksikan berbagai
              pertunjukan seni tradisional dari berbagai daerah, mulai dari
              tarian khas, musik, hingga pakaian adat yang memukau. Acara ini
              dirancang untuk memperkenalkan dan melestarikan kekayaan budaya
              nusantara serta memberikan pengalaman berkesan yang menyatukan
              seni dan identitas bangsa.
            </p>
          </div>
          <div className="column">
            <img src="src/assets/wisata/budaya3.png" alt="" />
            <h3>Kriya Kerajinan Anyaman Lidi Kelapa</h3>
            <p>
              Pengunjung dapat menikmati pengalaman unik dalam Kriya Kerajinan
              Anyaman Lidi Kelapa. Aktivitas ini mengajak wisatawan untuk
              belajar dan terlibat langsung dalam proses pembuatan anyaman khas
              dari lidi kelapa, yang diolah menjadi berbagai kerajinan seperti
              piring, tempat pena, dan hiasan dinding.
            </p>
          </div>
        </div>
      </div>
      <div className="buatan-title">
        <h3>Wisata Buatan Rekomendasi</h3>
        <p>
          Mangrove pandang tak jemu juga memberikan kamu pengalaman yang tidak
          terlupakan jika mencoba wisata ini, bermain serta gathering bersama
          rekan rekan menjadi tempat yang cocok lho!
        </p>
      </div>
      <div className="container-buatan">
        <div className="column">
          <img src="src/assets/wisata/budaya1.png" alt="" />
          <h3>Camping/Kemah</h3>
          <p>
            Rasakan pengalaman berkemah di tengah alam dengan suasana mangrove
            yang tenang dan menyegarkan. Camping di Mangrove Pandang Tak Jemu
            menjadi pilihan ideal bagi pecinta alam yang ingin merasakan
            kedekatan dengan lingkungan pesisir, ditemani angin laut yang sejuk
            dan pemandangan indah hutan mangrove.
          </p>
        </div>
        <div className="column">
          <img src="src/assets/wisata/budaya2.png" alt="" />
          <h3>Paintball Games</h3>
          <p>
            Rasakan sensasi petualangan dan strategi seru di Paintball Games
            Mangrove Pandang Tak Jemu. Nikmati permainan tim yang menantang di
            area terbuka yang dikelilingi keindahan alam mangrove. Aktivitas ini
            cocok untuk keluarga, teman, maupun kelompok yang mencari pengalaman
            seru dan menguji keberanian.
          </p>
        </div>
      </div>
      <FooterComponents />
    </div>
  );
};

export default WisataPage;
