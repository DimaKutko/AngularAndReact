import React from "react";
import "./../App.css";

export default function Task1(props) {
  const {
    book: { name, description, img, author },
  } = props;

  return (
    <>
      <h5>TASK 2</h5>
      <img src={img} alt={name} />
      <h2>
        {name} [{author}]
      </h2>
      <div class="description">
        <p>Описание: {description}</p>
      </div>
    </>
  );
}
