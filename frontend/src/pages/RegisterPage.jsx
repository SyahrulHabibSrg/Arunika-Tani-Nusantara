import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
          role: "user", // Default role user
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        window.location.href = "/login"; // Redirect ke halaman login
      } else {
        alert(`Registrasi gagal: ${data.message}`);
      }
    } catch (error) {
      console.error("Error saat registrasi:", error.message);
      alert("Terjadi kesalahan. Coba lagi.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: 'url("./src/assets/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Form
        className="col-md-3 p-4 rounded"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
        onSubmit={handleRegister}
      >
        <h4 className="text-center mb-4">Register</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100 mt-2">
          Daftar
        </Button>

        <Form.Text className="text-muted">
          Sudah punya akun? <a href="/login">Login</a>
        </Form.Text>
      </Form>
    </div>
  );
}

export default RegisterPage;
