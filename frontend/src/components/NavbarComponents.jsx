import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarComponents = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbars ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-user">
          <img src="src/logo.png" alt="Logo" className="logo" />
          <span>
            Ekowisata Mangrove <br /> Pandang Tak Jemu
          </span>
        </div>
        <div className={`nav-linkin ${isToggled ? "nav-active" : ""}`}>
          <ul>
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/wisata">Wisata</a>
            </li>
            <li>
              <a href="/fasilitas">Fasilitas</a>
            </li>
            <li>
              <a href="/umkm">UMKM</a>
            </li>
            <li>
              <a href="/berita">Berita</a>
            </li>
            <li>
              <a href="/galeri">Galeri</a>
            </li>
            <li>
              <a href="/kontak">Kontak</a>
            </li>
            <li>
              <a href="/login">
                <button className="login-button">Login</button>
              </a>
            </li>
          </ul>
        </div>
        <button className="togglers" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </div>
  );
};

export default NavbarComponents;
