import React from "react";

export default function Task1(props) {
  const {
    book: { name, discription, img, author },
  } = props;

  return (
    <>
      <h5>TASK 1</h5>
      <img src={img} alt={name} />
      <h2>{name} [{author}]</h2>
      <p>Description: {discription}</p>
    </>
  );
}
