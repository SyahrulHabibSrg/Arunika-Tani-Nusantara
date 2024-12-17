import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; 

function NavScrollExample() {
  const navigate = useNavigate();

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-dark-green">
      <Container fluid>
        <Navbar.Brand className="text-white mx-lg-3 my-1">
          Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5 gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/admin" className="text-white">
              Users
            </Nav.Link>
            <Nav.Link href="/admin/umkm" className="text-white">
              Product
            </Nav.Link>
            <Nav.Link href="/admin/news" className="text-white">
              News
            </Nav.Link>
            <Nav.Link href="/admin/messages" className="text-white">
              Messages
            </Nav.Link>
          </Nav>
          {/* Tombol Logout */}
          <div className="my-0 px-4">
            <Button variant="danger" onClick={handleLogout} className="ms-3">
              Logout
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
