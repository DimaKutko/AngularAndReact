import React from "react";
import { Link } from "react-router-dom";

class Task2 extends React.Component {
  render() {
    const {
      data: { img, info },
    } = this.props;

    return (
      <>
        <h1>Task2</h1>
        <NavbarCity />
        <div>
          <img src={img} alt={img} />
          <div>{info}</div>
        </div>
      </>
    );
  }
}

const NavbarCity = () => {
  return (
    <div class="row">
      <Link class="item" to="/task2/city">
        City info
      </Link>
      <Link class="item" to="/task2/dyk">
        Дюк
      </Link>
      <Link class="item" to="/task2/park">
        Парк Шевченко
      </Link>
    </div>
  );
};

export default Task2;
