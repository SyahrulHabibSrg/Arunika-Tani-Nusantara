import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UMKM = () => {
  const [umkmList, setUmkmList] = useState([]);

  useEffect(() => {
    const fetchUMKM = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/umkm");
        setUmkmList(response.data.data);
      } catch (error) {
        console.error("Error fetching UMKM data:", error);
      }
    };

    fetchUMKM();
  }, []);

  return (
    <div className="umkm-list">
      {umkmList.map((item) => (
        <div className="umkm-item" key={item.id}>
          <img src={item.image} alt={item.name} width="150" height="150" />
          <span>{item.category}</span>
          <h3>{item.name}</h3>
          <p>Rp {item.price}</p>
          <div className="button-container">
            <a href="http://wa.me/6285932982930">
              <button className="order-button">
                <img src="public/assets/umkm/shop.png" alt="" className="icon-send" />
                Pesan
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UMKM;
