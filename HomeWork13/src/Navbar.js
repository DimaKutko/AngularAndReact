import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div class="row">
      <Link to="/task1" class="item">
        Task 1
      </Link>
      <Link to="/task2" class="item">
        Task 2
      </Link>
      <Link to="/profile" class="item">
        Profile
      </Link>
    </div>
  );
};

export default Navbar;
