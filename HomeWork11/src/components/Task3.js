import React from "react";
import "./../App.css";

export default function Task2(props) {
  const {
    recipe: { name, recipe, img, ingredients },
  } = props;

  let array = [];
  for (let i = 0; i < ingredients.length; i++) {
    array.push(<Ingredient ingredient={ingredients[i]} />);
  }

  return (
    <>
      <h5>TASK 3</h5>
      <img src={img} alt={name} />
      <h2>{name} </h2>

      <div class="description">
        <ul>{array}</ul>

        <p>Рецепт: {recipe}</p>
      </div>
    </>
  );
}

function Ingredient(props) {
  const {
    ingredient: { name, count},
  } = props;

  return (
    <li>
      {name} {count}
    </li>
  );
}
