/*import { StrictMode } from "react";
import ReactDOM from "react-dom";*/
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./App";

// const car = {
//   model: "Audi SQ5",
//   year: "2013",
//   price: 150000,
//   img: img,
// };

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);