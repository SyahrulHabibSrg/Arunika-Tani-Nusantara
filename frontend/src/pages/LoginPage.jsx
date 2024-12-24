import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Simpan token
        localStorage.setItem("role", data.role);   
        alert("Login berhasil!");

        if (data.role === "admin") {
          navigate("/admin");
        } else if (data.role === "user") {
          navigate("/"); 
        }
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Terjadi kesalahan saat login. Coba lagi.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: 'url("./public/assets/login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Form
        className="col-md-3 p-4 rounded"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleLogin}
      >
        <h4 className="text-center mb-4">Login</h4>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100 mt-2">
          Login
        </Button>

        <Form.Text className="text-muted text-center mt-3">
          Belum punya akun? <a href="/register">Daftar</a>
        </Form.Text>
      </Form>
    </div>
  );
}

export default LoginPage;
