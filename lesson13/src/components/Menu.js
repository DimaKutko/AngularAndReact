import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  as={NavLink} to="/Cars">Cars</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/creator">Creator</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
