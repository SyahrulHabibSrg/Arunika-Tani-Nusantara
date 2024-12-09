const db = require('../config/database');

const createUMKM = (req, res) => {
  const { name, category, price } = req.body;
  const image = req.file ? req.file.filename : null;

  const query = `INSERT INTO umkm (name, category, price, image) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, category, price, image], (err, result) => {
    if (err) {
      console.error('Error inserting UMKM:', err);
      return res.status(500).json({ message: 'Failed to add UMKM' });
    }
    // Kirimkan URL gambar lengkap
    const imageUrl = image ? `http://localhost:5000/uploads/${image}` : null;
    res.status(201).json({
      message: 'UMKM berhasil ditambahkan',
      data: { id: result.insertId, name, category, price, image: imageUrl },
    });
  });
};

const getUMKM = (req, res) => {
  const query = `SELECT * FROM umkm`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching UMKM:', err);
      return res.status(500).json({ message: 'Failed to fetch UMKM' });
    }
    // Kirimkan data UMKM beserta URL gambar
    const data = results.map((umkm) => ({
      id: umkm.id,
      name: umkm.name,
      category: umkm.category,
      price: umkm.price,
      image: umkm.image ? `http://localhost:5000/uploads/${umkm.image}` : null,
    }));
    res.status(200).json({ data });
  });
};

// Menghapus UMKM berdasarkan ID
const deleteUMKM = (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM umkm WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting UMKM:', err);
      return res.status(500).json({ message: 'Failed to delete UMKM' });
    }
    res.status(200).json({ message: 'UMKM berhasil dihapus' });
  });
};

module.exports = { createUMKM, getUMKM, deleteUMKM };
