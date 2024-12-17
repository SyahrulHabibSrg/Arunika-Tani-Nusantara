const bcrypt = require("bcrypt");
const db = require("../config/database");

// Fungsi untuk registrasi user
const registerUser = (req, res) => {
  const { email, username, password, role } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "Semua input harus diisi!" });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error saat meng-hash password!" });
    }

    // Query untuk menyimpan data user
    const query = "INSERT INTO users (email, username, password, role) VALUES (?, ?, ?, ?)";
    db.query(query, [email, username, hashedPassword, role || "user"], (err, results) => {
      if (err) {
        console.error("Error saat menyimpan data user:", err.message);
        return res.status(500).json({ message: "Terjadi kesalahan saat registrasi." });
      }

      res.status(201).json({ message: "Registrasi berhasil!" });
    });
  });
};

// Fungsi untuk login user
const loginUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Semua input harus diisi!" });
  }

  // Query untuk mencari user berdasarkan username
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error("Error fetching user:", err.message);
      return res.status(500).json({ message: "Terjadi kesalahan server." });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Username tidak ditemukan!" });
    }

    const user = results[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Password salah!" });
    }

    res.status(200).json({ message: "Login berhasil!", role: user.role });
  });
};

module.exports = { registerUser, loginUser };
