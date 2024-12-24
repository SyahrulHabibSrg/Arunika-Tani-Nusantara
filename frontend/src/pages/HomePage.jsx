import SejarahComponents from "../components/SejarahComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import NavbarComponents from "../components/NavbarComponents"
import FooterComponents from "../components/FooterComponents"

const HomePage = () => {
  return (
    <div>
      <NavbarComponents/>
      <div className="hero">
        <img
          src="/assets/hero.png"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero-content">
          <h3>
            Mari Jelajahi Ekowisata <br />
            Mangrove Pandang Tak Jemu
          </h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kampung Tua Bakau Serip
            (Kelurahan Sambau), <br />
            Kecamatan Nongsa, Kota Batam, Kepulauan Riau
          </p>
          <div className="hero-button1">
          <a href="#mangrove">
            <button className="hero-button">
              {" "}
              Mulai{" "}
              <span className="arrow-icon">
                <i className="fas fa-angle-right"></i>
              </span>
            </button>
          </a>
          </div>
        </div>
      </div>

      <div className="mangrove-info" id="mangrove">
        <div className="mangrove-content">
          <h2>"Menelusuri Alam Mangrove: Sejuk, Asri, Penuh Kehidupan"</h2>
          <p>
            "Nikmati akses mudah menuju Mangrove Pandang Tak Jemu, terletak
            strategis di jantung ekowisata Nongsa, Batam."
          </p>

          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KHp3unrUX1M?si=m_lmrjKt1EVWCvLy"
              title="YouTube video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p>
            Kampung Tua Bakau Serip merupakan salah satu desa wisata yang
            terletak di Kota Batam. Tepatnya berada di Jalan Hang Lekiu,
            Kelurahan Sambau, Kecamatan Nongsa. Jarak menuju Kampung Tua Bakau
            Serip dari Bandara Internasional Hang Nadim hanya sejauh 14.2 Km
            atau sekitar 20 menit bila ditempuh dengan kendaraan roda empat, 45
            menit dari pusat Kota Batam atau sekitar 5 menit dari terminal Ferry
            Internasional Nongsa Pura. Desa yang letaknya berhampiran dengan
            Teluk Mata Ikan dan makam Nong Isa (Raja Melayu) ini dianggap
            sebagai salah satu kampung tertua di Kota Batam oleh sebagian
            kalangan.
          </p>
        </div>
      </div>

      <div className="slider-title">
        <h2>"Kenali Jejak Hijau Pandang Tak Jemu: Dari Mimpi ke Nyata"</h2>
      </div>

      <SejarahComponents />

      <div className="uniqueness">
        <h2>Keunikan Kami</h2>
        <ul className="uniqueness-list">
          <li>
            <img
              src="/assets/keunikan/1.png"
              alt="Keberagaman Hayati"
              className="uniqueness-image"
            />
            <h3>Pohon Mangrove tertua berusia PuIuhan hingga Ratusan Tahun</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
          <li>
            <img
              src="/assets/keunikan/2.png"
              alt="Program Edukasi Lingkungan"
              className="uniqueness-image"
            />
            <h3>Memandang Negeri Jiran dari seberang pantai pasir putih</h3>
            <p>
              Kalau sudah menyambangi hutan bakaunya, Sobat Pesona harus
              teruskan perjalanan hingga pesisir pantai di Kampung Tua Bakau
              Serip. Ada dua pantai di sini, yaitu Pantai Bale dan Pantai
              Pandang Tak Jemu. Keduanya menghadap ke Negeri Jiran, yaitu
              Malaysia dan Singapura yang penampakannya bisa Sobat Pesona
              saksikan dari pinggir pantai. 
            </p>
          </li>
          <li>
            <img
              src="/assets/keunikan/3.png"
              alt="Komunitas Lokal yang Terlibat"
              className="uniqueness-image"
            />
            <h3>Menikmati Pantai Pasir Putih</h3>
            <p>
              Keindahan lain pantai-pantai ini terletak pada pasir putihnya yang
              bersih dan memesona dengan dikelilingi hutan bakau. Di sini juga
              terdapat beberapa fasilitas seperti ayun-ayunan dan gazebo.
              Pokoknya, enggak rugi kalau ke sini!
            </p>
          </li>
        </ul>
      </div>

      <div className="wisata-section">
        <h2>"Wisata Seru, Dekat dan Jauh Menantimu!"</h2>
        <p>
          Tidak yakin ke mana harus pergi untuk perjalanan Anda berikutnya? kami
          punya saran untuk Anda!
        </p>
        <div className="wisata-list">
          <div className="wisata-item">
            <img
              src="/assets/wisata/1.png"
              alt="Mangrove Walk"
              className="wisata-image"
            />
            <div className="wisata-info">
              <h4 className="small-title">Wisata Alam</h4>
              <h3>Wisata Alam Mangrove Pandang Tak Jemu</h3>
              <p>
                Keindahan alam dan keasrian ekosistem mangrove berpadu. Di sini,
                Anda akan disuguhkan pemandangan hijau yang menyejukkan mata,
                sekaligus mengenal lebih dekat ekosistem mangrove yang kaya
                manfaat. Wisata ini cocok bagi Anda yang mencari ketenangan dan
                ingin menikmati suasana alam yang asri sambil menyusuri jembatan
                kayu di tengah pepohonan mangrove.
              </p>
            </div>
          </div>
          <div className="wisata-item">
            <img
              src="/assets/wisata/2.png"
              alt="Bird Watching"
              className="wisata-image"
            />
            <div className="wisata-info">
              <h4 className="small-title">Wisata Budaya</h4>
              <h3>Pentas Seni Budaya Nusantara</h3>
              <p>
                Tempat di mana pengunjung dapat menikmati keindahan dan keunikan
                budaya Melayu melalui seni tari tradisional. Sanggar ini
                menghadirkan berbagai pertunjukan tari khas Melayu yang anggun
                dan penuh makna, dipadukan dengan alunan musik tradisional yang
                merdu.
              </p>
            </div>
          </div>
          <div className="wisata-item">
            <img
              src="/assets/wisata/3.png"
              alt="Pantai Pasir Putih"
              className="wisata-image"
            />
            <div className="wisata-info">
              <h4 className="small-title">Wisata Buatan</h4>
              <h3>Paintball Games</h3>
              <p>
                Rasakan sensasi petualangan dan strategi seru di Paintball Games
                Mangrove Pandang Tak Jemu. Nikmati permainan tim yang menantang
                di area terbuka yang dikelilingi keindahan alam mangrove.
                Aktivitas ini cocok untuk keluarga, teman, maupun kelompok yang
                mencari pengalaman seru dan menguji keberanian.
              </p>
            </div>
          </div>
        </div>
        <div className="wisata-main-button-container">
          <a href="/wisata">
            <button className="wisata-main-button">
              Selengkapnya{" "}
              <img
                src="/assets/Forward Button.png"
                alt="Arrow Icon"
                className="icon-arrow"
              />
            </button>
          </a>
        </div>
      </div>

      <div className="umkm-section" id="umkm">
        <h2>Dukung UMKM Desa Wisata Kampung Tua Bakau Serip!</h2>
        <p>
          Temukan keunikan produk lokal mereka dan jadikan kunjungan Anda
          berarti dengan mendukung usaha-usaha kecil di sini. <br /> Ayo, datang
          dan kenali ragam UMKM yang menawarkan produk kreatif dan berkualitas.
        </p>

        <div className="umkm-list">
          <div className="umkm-item">
            <img src="/assets/umkm/1.png" alt="" />
            <span>Makanan & Minuman</span>
            <h3>Otak-Otak</h3>
            <p>Rp 15.000</p>
            <div className="button-container">
              <a href="http://wa.me/6285932982930">
                <button className="order-button">
                  <img
                    src="/assets/umkm/shop.png"
                    alt=""
                    className="icon-send"
                  />
                  Pesan
                </button>
              </a>
            </div>
          </div>

          <div className="umkm-item">
            <img src="/assets/umkm/2.png" alt="" />
            <span>Makanan & Minuman</span>
            <h3>Gong-gong</h3>
            <p>Rp 12.000</p>
            <div className="button-container">
              <a href="http://wa.me/6285932982930">
                <button className="order-button">
                  <img
                    src="/assets/umkm/shop.png"
                    alt=""
                    className="icon-send"
                  />
                  Pesan
                </button>
              </a>
            </div>
          </div>

          <div className="umkm-item">
            <img src="/assets/umkm/3.png" alt="" />
            <span>Makanan & Minuman</span>
            <h3>Gogos & Buras</h3>
            <p>Rp 18.000</p>
            <div className="button-container">
              <a href="http://wa.me/6285932982930">
                <button className="order-button">
                  <img
                    src="/assets/umkm/shop.png"
                    alt=""
                    className="icon-send"
                  />
                  Pesan
                </button>
              </a>
            </div>
          </div>

          <div className="umkm-item">
            <img src="/assets/umkm/4.png" alt="" />
            <span>Makanan & Minuman</span>
            <h3>Luti Gedang</h3>
            <p>Rp 17.000</p>
            <div className="button-container">
              <a href="http://wa.me/6285932982930">
                <button className="order-button">
                  <img
                    src="/assets/umkm/shop.png"
                    alt=""
                    className="icon-send"
                  />
                  Pesan
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="wisata-main-button-container">
          <a href="/wisata">
            <button className="wisata-main-button">
              Selengkapnya{" "}
              <img
                src="/assets/Forward Button.png"
                alt="Arrow Icon"
                className="icon-arrow"
              />
            </button>
          </a>
        </div>
      </div>

      <div className="fasilitas-section" id="fasilitas">
        <h2>Dukung Fasilitas Desa Wisata Kampung Tua Bakau Serip!</h2>
        <p>
          Temukan keunikan produk lokal mereka dan jadikan kunjungan Anda
          berarti dengan mendukung usaha-usaha kecil di sini. <br /> Ayo, datang
          dan kenali ragam UMKM yang menawarkan produk kreatif dan berkualitas.
        </p>

        <div className="fasilitas-list">
          <div className="fasilitas-item">
            <img src="/assets/fasilitas/1.png" alt="" />
            <h3>Area Parkir</h3>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className="fasilitas-item">
            <img src="/assets/fasilitas/2.png" alt="" />
            <h3>Mushola</h3>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className="fasilitas-item">
            <img src="/assets/fasilitas/3.png" alt="" />
            <h3>Kamar Mandi Umum</h3>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className="wisata-main-button-container">
          <a href="/wisata">
            <button className="wisata-main-button">
              Selengkapnya{" "}
              <img
                src="/assets/Forward Button.png"
                alt="Arrow Icon"
                className="icon-arrow"
              />
            </button>
          </a>
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
        <div className="news-grid">
          <div className="news-item">
            <a href="https://disbudpar.batam.go.id/2022/06/02/kampung-tua-bakau-serip-batam-masuk-50-besar-desa-wisata-terbaik/">
              <img
                src="/assets/berita/logo-news1.png"
                alt="Logo"
                className="news-logo"
              />
              <img src="/assets/berita/3.png" alt="News Thumbnail" className="thumbnail"/>
              <h3>
                Kampung Tua Bakau Serip Batam Masuk 50 Besar Desa Wisata Terbaik
              </h3>
              <p>02 Juni 2022</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://disbudpar.batam.go.id/2023/08/07/kemenparekraf-serahkan-bantuan-boat-untuk-desa-wisata-kampung-tua-bakau-serip/">
              <img
                src="/assets/berita/logo-news1.png"
                alt="Logo"
                className="news-logo"
              />
              <img src="/assets/berita/4.png" alt="News Thumbnail" className="thumbnail"/>
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
                src="/assets/berita/logo-news2.png"
                alt="Logo"
                className="news-logo"
              />
              <img src="/assets/berita/5.png" alt="News Thumbnail" className="thumbnail"/>
              <h3>
                PMM Batch 4 Dari Mahasiswa Se-Nusantara Untuk Masyarakat Batam
              </h3>
              <p>16 Juli 2024</p>
            </a>
          </div>
          <div className="news-item">
            <a href="https://ugm.ac.id/id/berita/23159-kampung-tua-bakau-serip-mitra-riset-psek-ugm-raih-penghargaan-desa-wisata-2022/">
              <img
                src="/assets/berita/logo-news3.png"
                alt="Logo"
                className="news-logo"
              />
              <img src="/assets/berita/6.png" alt="News Thumbnail" className="thumbnail"/>
              <h3>Kegiatan Bersama Pelajar untuk Edukasi Ekosistem Mangrove</h3>
              <p>11 November 2022</p>
            </a>
          </div>
        </div>
        <div className="wisata-main-button-container">
          <a href="/wisata">
            <button className="wisata-main-button">
              Selengkapnya{" "}
              <img
                src="/assets/Forward Button.png"
                alt="Arrow Icon"
                className="icon-arrow"
              />
            </button>
          </a>
        </div>
      </div>
      <FooterComponents/>
    </div>
  )
}

export default HomePage
