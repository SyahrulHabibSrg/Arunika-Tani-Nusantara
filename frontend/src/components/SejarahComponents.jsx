import React, { useState } from 'react';

const SejarahComponents = () => {
    const [slideIndex, setSlideIndex] = useState(0); // Dimulai dari slide pertama

    const slides = [
        {
            title: "Semua Bermula Dari Sini",
            year: "2017",
            description: "Ekowisata Mangrove Pandang Tak Jemu yang saat ini masih menjadi tempat pertemuan sempurna, berada di titik koordinat. Gerry D Senrik, inisiator utama, mulai melakukan pembersihan mangrove. Kepedulian Gerry menarik perhatian masyarakat sekitar. Terbentuklah kelompok sadar wisata Prodamags yang turut serta dalam upaya penyelamatan mangrove.",
            imgSrc: "src/assets/slider/1.png",
            backgroundClass: "bg-slide-1"
        },
        {
            title: "Semua Bermula Dari Sini",
            year: "2018",
            description: "Dengan dukungan komunitas, kawasan tersebut mulai diubah menjadi sebuah ekowisata. Pembangunan infrastruktur dasar seperti jembatan kayu dan area rekreasi kecil mulai dilakukan. Upaya promosi dilakukan melalui media sosial dan jaringan komunitas lokal.",
            imgSrc: "src/assets/slider/2.png",
            backgroundClass: "bg-slide-2"
        },
        {
            title: "Pertumbuhan Pesat",
            year: "2020",
            description: "Semakin banyak wisatawan lokal yang tertarik mengunjungi ekowisata ini. Pengembangan Fasilitas: Fasilitas pendukung seperti toilet, tempat istirahat, dan warung makan mulai ditambah. Kegiatan edukasi mengenai pentingnya menjaga mangrove semakin intensif.",
            imgSrc: "src/assets/slider/3.png",
            backgroundClass: "bg-slide-3"
        },
        {
            title: "Tantangan Pandemi",
            year: "2020 - 2021",
            description: "Pandemi Covid-19 menyebabkan penurunan jumlah pengunjung secara drastis. Tim pengelola melakukan berbagai upaya adaptasi, seperti promosi online dan pengembangan produk tur virtual.",
            imgSrc: "src/assets/slider/4.png",
            backgroundClass: "bg-slide-4"
        },
        {
            title: "Pemulihan Dan Inovasi",
            year: "2022",
            description: "Seiring dengan melandainya pandemi, jumlah pengunjung mulai meningkat kembali. Dilaksanakan berbagai kegiatan wisata baru seperti mangrove tracking, bird watching, dan wisata kuliner. Ekowisata Pandang Tak Jemu mulai mendapatkan perhatian media nasional dan masuk dalam daftar destinasi wisata yang menarik.",
            imgSrc: "src/assets/slider/5.png",
            backgroundClass: "bg-slide-5"
        },
        {
            title: "Masa Depan Yang Cerah",
            year: "2023",
            description: "Terjalin kerjasama dengan berbagai pihak, baik pemerintah, swasta, maupun lembaga non-profit untuk mendukung pengembangan ekowisata. Fokus pada pengelolaan yang berkelanjutan, dengan tetap menjaga keseimbangan antara aspek ekonomi, sosial, dan lingkungan.",
            imgSrc: "src/assets/slider/6.png",
            backgroundClass: "bg-slide-6"
        },
        {
            title: "Semua Bermula Dari Sini",
            year: "2024 - Sekarang",
            description: "Ekowisata Pandang Tak Jemu berpotensi menjadi destinasi wisata unggulan di Batam, sekaligus menjadi contoh keberhasilan dalam upaya pelestarian mangrove.",
            imgSrc: "src/assets/slider/7.png",
            backgroundClass: "bg-slide-7"
        },
    ];

    // Fungsi untuk mengubah slide
    const changeSlide = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex >= slides.length) newIndex = 0;
        else if (newIndex < 0) newIndex = slides.length - 1;
        setSlideIndex(newIndex);
    };

    return (
        <div className="slider-section">
            <div className={`slider-container ${slides[slideIndex].backgroundClass}`}>
                <h2>{slides[slideIndex].title}</h2>
                <div className="slide-content">
                    <div className="text-content">
                        <h3>{slides[slideIndex].year}</h3>
                        <p>{slides[slideIndex].description}</p>
                    </div>
                    <img src={slides[slideIndex].imgSrc} alt={`Slide ${slideIndex + 1}`} />
                </div>
                
                {/* Tombol navigasi */}
                <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
                
                {/* Dot navigasi */}
                <div className="dot-container">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === slideIndex ? 'active' : ''}`}
                            onClick={() => setSlideIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SejarahComponents
