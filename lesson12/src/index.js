/*import { StrictMode } from "react";
import ReactDOM from "react-dom";*/
import React from "react";
import { render } from "react-dom";

import App from "./App";
import Car from "./components/Car";

import img from "./assets/audi.jfif";
import Creator from "./components/Creator";
import CarsList from "./components/CarsList";
import cars from "./models/car.js"
import Form from "./components/Form";

const car = {
  model: "Audi SQ5",
  year: "2013",
  price: 150000,
  img: img,
};

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
    {/* <Car data={car} /> */}
    {/* <Creator /> */}
    <Form/>
    <CarsList data={cars}/>
  </React.StrictMode>,
  rootElement
);
/*ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);*/
