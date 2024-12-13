const db = require("../config/database");
const path = require("path");

// GET: Fetch all news
exports.getAllNews = (req, res) => {
  const query = "SELECT * FROM news";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: "Error fetching news", err });
    res.status(200).json(results);
  });
};

// POST: Add new news
exports.addNews = (req, res) => {
  const { title, link, date } = req.body;
  const logo = req.files?.logo ? `/uploads/${req.files.logo[0].filename}` : null;
  const thumbnail = req.files?.thumbnail ? `/uploads/${req.files.thumbnail[0].filename}` : null;

  const query = "INSERT INTO news (title, link, date, logo, thumbnail) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [title, link, date, logo, thumbnail], (err, result) => {
    if (err) return res.status(500).json({ message: "Error adding news", err });
    res.status(201).json({ message: "Berita berhasil ditambahkan", id: result.insertId });
  });
};

// PUT: Update news
exports.updateNews = (req, res) => {
  const { id } = req.params;
  const { title, link, date } = req.body;
  const logo = req.files?.logo ? `/uploads/${req.files.logo[0].filename}` : null;
  const thumbnail = req.files?.thumbnail ? `/uploads/${req.files.thumbnail[0].filename}` : null;

  const query =
    "UPDATE news SET title = ?, link = ?, date = ?, logo = ?, thumbnail = ? WHERE id = ?";
  db.query(query, [title, link, date, logo, thumbnail, id], (err) => {
    if (err) return res.status(500).json({ message: "Error updating news", err });
    res.status(200).json({ message: "Berita berhasil di edit" });
  });
};

// DELETE: Remove news
exports.deleteNews = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM news WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting news", err });
    res.status(200).json({ message: "Berita berhasil dihapus" });
  });
};
