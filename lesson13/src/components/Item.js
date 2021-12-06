import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Item(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>
          {props.model}
          {props.name}[{props.year}]
        </Card.Title>
        <NavLink to={`/car/${props.id}`}>
          <Button variant="primary">Open</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}
