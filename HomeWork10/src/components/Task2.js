import React from "react";
import "./../App.css";

export default function Task2(props) {
  const {
    group: { name, description, img, participants, albums },
  } = props;

  let array = [];
  for (let i = 0; i < albums.length; i++) {
    array.push(<Album album={albums[i]} />);
  }

  return (
    <>
      <h5>TASK 2</h5>
      <img src={img} alt={name} />
      <h2>{name} </h2>
      <div class="description">
        <p>Описание: {description}</p>
      </div>
      <div class="description">
        <p>Состав: {participants}</p>
      </div>
      <div  class="albums">{array}</div>
    </>
  );
}

function Album(props) {
  const {
    album: { name, img },
  } = props;

  return (
    <>
      <div class="album">
        <img src={img} alt={name} />
        <h5>{name} </h5>
      </div>
    </>
  );
}
