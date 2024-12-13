import React, { useState, useEffect } from "react";
import axios from "axios";


const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    logo: "",
    thumbnail: "",
    date: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch news data
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/news");
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update news
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update news
        await axios.put(`http://localhost:5000/api/news/${editingId}`, formData);
        setEditingId(null);
      } else {
        // Add news
        await axios.post("http://localhost:5000/api/news", formData);
      }
      fetchNews();
      setFormData({ title: "", link: "", logo: "", thumbnail: "", date: "" });
    } catch (error) {
      console.error("Error saving news:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`);
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
  };

  return (
    <div className="admin-news">
      <h2>Admin News Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Logo URL:</label>
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Thumbnail URL:</label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{editingId ? "Update" : "Add"} News</button>
      </form>

      <h3>News List</h3>
      <div className="news-grid">
        {news.map((item) => (
          <div className="news-item" key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.logo} alt="Logo" className="news-logo" />
              <img
                src={item.thumbnail}
                alt="News Thumbnail"
                className="news-thumbnail"
              />
              <h3>{item.title}</h3>
              <p>{new Date(item.date).toLocaleDateString()}</p>
            </a>
            <div className="actions">
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;