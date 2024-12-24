import ContactForm from "../components/ContactForm";
import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";

const KontakPage = () => {
  return (
    <div>
      <NavbarComponents />
      <div className="hero">
        <img
          src="/assets/kontak/kontak.png"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero1-content">
          <h3>Hubungi Kami</h3>
          <p>Ekowisata Mangrove Desa Wisata Kampung Tua Bakau Serip</p>
          <div className="hero1-button1">
            <a href="#kontak">
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

      <div className="team-section" id="kontak">
        <h3>Tim Terbaik Kami</h3>

        <div className="team-content">
          <div className="team-member">
            <img src="/assets/kontak/1.png" alt="Gery D Smith" />
            <h4>Gery D Smith</h4>
            <p>
              Ketua Pokdarwis Kampung Tua Bakau Serip
              <br /> Mangrove Pandang Tak Jemu
            </p>
            <a href="https://linkedin.com" target="_blank">
              <img src="/assets/kontak/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <div className="team-member">
            <img
              src="/assets/kontak/2.png"
              alt="Izzuddin Haidar Al Qossam"
            />
            <h4>Izzuddin Haidar Al Qossam</h4>
            <p>
              Project Manager & Scrum Master
              <br /> Institut Pertanian Bogor
            </p>
            <a
              href="https://www.linkedin.com/in/izzuddin-haidar-al-qossam-544a531b9/"
              target="_blank"
            >
              <img src="/assets/kontak/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <div className="team-member">
            <img src="/assets/kontak/3.png" alt="Dea Aisyah Wulandari" />
            <h4>Dea Aisyah Wulandari</h4>
            <p>
              Hispter
              <br /> Universitas Maritim Raja Ali Haji
            </p>
            <a
              href="https://www.linkedin.com/in/dea-aisyah-wulandari-162012309"
              target="_blank"
            >
              <img src="/assets/kontak/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <div className="team-member">
            <img src="/assets/kontak/4.png" alt="Syahrul Habib" />
            <h4>Syahrul Habib</h4>
            <p>
              Hacker
              <br /> Universitas Sumatera Utara
            </p>
            <a
              href="https://www.linkedin.com/in/syahrul-habib-5b6949295/"
              target="_blank"
            >
              <img src="/assets/kontak/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.981749336121!2d104.06841577311793!3d1.1733296988154551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d989f50e7ce455%3A0xad4299324777d760!2sPANDANG%20TAK%20JEMU%20(%20Ekowisata%20Mangrove)!5e0!3m2!1sid!2sid!4v1731758632277!5m2!1sid!2sid"
          width="1350"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mangrove Pandang Tak Jemu"
        ></iframe>
      </div>
      <FooterComponents />
    </div>
  );
};

export default KontakPage;
