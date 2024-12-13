import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark-green">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white mx-lg-3 my-1">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-5 gap-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">Dashboard</Nav.Link>
            <Nav.Link href="/admin/umkm" className="text-white">Product</Nav.Link>
            <Nav.Link href="/" className="text-white">News</Nav.Link>
            <Nav.Link href="/admin/messages" className="text-white">Messages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;