import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AdminNavBar() {
  return (
    <Navbar
      expand="lg"
      bg="1f232b"
      variant="dark"
      className="admin-navbar w-100"
      dir="rtl"
    >
      <Container fluid className="px-3">
        <Navbar.Brand className="fw-bold" href="#">
          لوحة المشرف
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="mainNavbar"
          className="shadow-none border-0"
        />

        <Navbar.Collapse id="mainNavbar" className="justify-content-start">
          {/* RTL: use me-auto / ms-auto depending where you want the links */}
          <Nav className="me-auto gap-2">
            <Nav.Link href="#">الرئيسية</Nav.Link>
            <Nav.Link href="#">التقارير</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavBar;
