import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/todolist">TodoList</Nav.Link>
                    <Nav.Link as={NavLink} to="/moments">Moments</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
};

export default Menu;