import React from "react";
import "./../App.css";

export default function Task4(props) {
  const {
    cat: { name, img, age, type },
  } = props;

  return (
    <>
      <h5>TASK 4</h5>
      <img src={img} alt={name} />
      <h2>Кличка: {name}</h2>
      <div class="description">
        Лет: {age} <br/>
        Порода: {type}
      </div>
    </>
  );
}
