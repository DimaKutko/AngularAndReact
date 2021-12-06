import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { getCarById } from "../services/car_service";

export default function Test() {
  let { id } = useParams();

  let car = getCarById(id);

  console.log(car);

  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={car.img} />
      <Card.Body>
        <Card.Title>
          {car.model}
          {car.name}[{car.year}]
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
