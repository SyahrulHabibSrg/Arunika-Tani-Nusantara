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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email@gmail.com" />
          <Form.Group />
          <Form.Group className="mb-3" controlId="formUsername"></Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-0.5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="register" className="mb-3 mt-5">
          Daftar
        </Button>
        <Form.Text className="text-muted">
         Sudah punya akun? <a href="/login">Login</a>
        </Form.Text>
      </Form>
    </div>
  );
}

export default BasicExample;
