import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FooterComponents = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top-decoration">
          <img src="src/assets/footer/footer.png" alt="Dekorasi atas footer" />
          <img src="src/assets/footer/footer.png" alt="Dekorasi atas footer" />
          <img src="src/assets/footer/footer.png" alt="Dekorasi atas footer" />
          <img src="src/assets/footer/footer.png" alt="Dekorasi atas footer" />
          <img src="src/assets/footer/footer.png" alt="Dekorasi atas footer" />
        </div>
        <div className="footer-container">
          <div className="footer-logo">
            <h2>Ekowisata Mangrove</h2>
          </div>
          <div className="footer-contact">
            <h3>Hubungi Kami</h3>
            <p>
              Ekowisata Alam Mangrove Pandang Tak Jemu
              <br />
              Desa Wisata Kampung Tua Bakau Serip
              <br />
              Jl. Hang Lekiu KM.4 Kelurahan Sambau, Kecamatan Nongsa
              <br />
              Kota Batam, Kepulauan Riau, Indonesia 29465
            </p>
            <p>
              <a href="http://wa.me/6281270031789">
                <img src="src/assets/footer/WhatsApp.png" alt="telepon" />
                +62 812-7003-1789
                <br />
              </a>
              <a href="https://www.instagram.com/mangrovepandangtakjemu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img src="src/assets/footer/Instagram.png" alt="email" />
                @mangrovepandangtakjemu
                <br />
              </a>
              <a href="https://www.facebook.com/share/1XrFzHPSF9/">
                <img src="src/assets/footer/facebook.png" alt="facebokk" />
                Ekowisata Mangrove Pandang Tak Jemu
                <br />
              </a>
              <a href="https://youtube.com/@mangrovepandangtakjemu151?si=eSrO3rpu5it3s7Nd">
                <img src="src/assets/footer/YouTube.png" alt="youtube" />
                Mangrove Pandang Tak Jemu
              </a>
            </p>
          </div>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.981749336121!2d104.06841577311793!3d1.1733296988154551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d989f50e7ce455%3A0xad4299324777d760!2sPANDANG%20TAK%20JEMU%20(%20Ekowisata%20Mangrove)!5e0!3m2!1sid!2sid!4v1731758632277!5m2!1sid!2sid"
              width="400"
              height="200"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mangrove Pandang Tak Jemu"
            ></iframe>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Ekowisata Mangrove ©2024 - made with{" "}
            <FontAwesomeIcon icon={faHeart} />{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponents;
