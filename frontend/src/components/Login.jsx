import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: 'url("./src/assets/login.jpg")', // Ganti dengan URL gambar latar belakang kamu
        backgroundSize: "cover", // Agar gambar mengisi seluruh area
        backgroundPosition: "center", // Agar gambar selalu terpusat
      }}
    >
      <Form
        className="col-md-3 p-4 rounded"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Warna latar belakang form dengan transparansi
        }}
      >
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-0.5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted m-auto text-end">
          <a href="/daftar">Lupa Password? </a>
        </Form.Text>
        <Button variant="success" type="sign up" className="button-login mb-3 mt-4">
          Login
        </Button>
        <Form.Text className="text-muted">
          Belum punya akun? <a href="/daftar">Daftar</a>
        </Form.Text>
      </Form>
    </div>
  );
}

export default BasicExample;
