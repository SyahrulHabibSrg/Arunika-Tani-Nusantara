const db = require('../config/database');

const sendMessage = (req, res) => {
  const { name, phone, address, email, message } = req.body;

  const query = `
    INSERT INTO contact_messages (name, phone, address, email, message) 
    VALUES (?, ?, ?, ?, ?)
  `;
  
  db.query(query, [name, phone, address, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting message:', err);
      return res.status(500).json({ message: 'Gagal mengirim pesan.' });
    }
    res.status(200).json({ message: 'Berhasil mengirim pesan' });
  });
};

module.exports = { sendMessage };
