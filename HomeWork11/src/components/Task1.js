import React from "react";
import "./../App.css";

export default function Task1(props) {
  const {
    movie: { name, description, img, year, director },
  } = props;

  return (
    <>
      <h5>TASK 1</h5>
      <img src={img} alt={name} />
      <h2>
        {name} [{year}]
      </h2>
      <div class="description">
        Режиссёр: {director}
      </div>
      <div class="description">
        <p>Описание: {description}</p>
      </div>
    </>
  );
}
