import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Menu from "./Menu";

export default function Layout() {
  return (
    <>
      <Menu />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
