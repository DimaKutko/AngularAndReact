import React from "react";
import {NavLink} from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {
    return (
        <>
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={NavLink} to='/'>Меню</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={NavLink} to='/carslist'>Машины</Nav.Link>
      <Nav.Link as={NavLink} to='/creator'>Создатель</Nav.Link>
        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>*/}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default Menu;