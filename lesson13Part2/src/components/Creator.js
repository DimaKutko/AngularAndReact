import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import creatorImage from "./../assets/images/creator.jfif";

const Creator = (props) => {
  let navigate = useNavigate();
  return  (
      <>
      <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={props.img} alt="" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
    <p>Name: {props.name}</p>
        <p>Surname: {props.surname}</p>
        <button onClick={()=>{navigate('/biography')}}>Биография</button>
    </Col>
  </Row>
</Container>
      </>
    );
  }
Creator.defaultProps = {
  name: "August",
  surname: "Horch",
  img: creatorImage
};
export default Creator;