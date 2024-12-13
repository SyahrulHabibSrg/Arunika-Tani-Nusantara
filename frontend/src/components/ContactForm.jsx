import React, { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Hubungi Kami</h3>
        <p>Ada yang bisa kami bantu?</p>
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Nama Lengkap"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">No. Telepon</label>
          <input
            type="text"
            id="phone"
            className="form-control"
            placeholder="No. Telepon"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Alamat</label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Alamat"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="name@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Pesan</label>
          <textarea
            id="message"
            className="form-control"
            rows="3"
            placeholder="Halo, saya ingin bertanya...."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Kirim Pesan
        </button>
      </form>
    </div>
  )
}

export default ContactForm
