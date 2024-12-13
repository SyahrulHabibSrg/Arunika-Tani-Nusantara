const db = require('../config/database');

// Get all news
exports.getAllNews = (req, res) => {
  const query = 'SELECT * FROM news';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
};

// Get single news by ID
exports.getNewsById = (req, res) => {
  const query = 'SELECT * FROM news WHERE id = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

// Create news
exports.createNews = (req, res) => {
  const { title, date, logo, thumbnail, link } = req.body;
  const query = 'INSERT INTO news (title, date, logo, thumbnail, link) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [title, date, logo, thumbnail, link], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  });
};

// Update news
exports.updateNews = (req, res) => {
  const { title, date, logo, thumbnail, link } = req.body;
  const query = 'UPDATE news SET title = ?, date = ?, logo = ?, thumbnail = ?, link = ? WHERE id = ?';
  db.query(query, [title, date, logo, thumbnail, link, req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'News updated successfully' });
    }
  });
};

// Delete news
exports.deleteNews = (req, res) => {
  const query = 'DELETE FROM news WHERE id = ?';
  db.query(query, [req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'News deleted successfully' });
    }
  });
};
