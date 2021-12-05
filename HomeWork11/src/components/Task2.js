import React from "react";
import "./../App.css";

export default function Task2(props) {
  const {
    user: { name, surname, img, birthday, city, country, lang },
  } = props;

  let array = [];
  for (let i = 0; i < lang.length; i++) {
    array.push(<>{lang[i]}, </>);
  }

  return (
    <>
      <h5>TASK 2</h5>
      <img src={img} alt={name} />
      <h2>
        {name} {surname} [{birthday}]
      </h2>
      <div class="description">
        Город: {city}[{country}]
        Языки: {array}
      </div>
    </>
  );
}
