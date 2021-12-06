import React from "react";
import { getAllCars } from "../services/car_service";
import Item from "./Item";

const CarsList = () => {

  var cars = getAllCars();
  return (
    <>
      {cars.map( item => (
        <Item key={item.id} {...item}></Item>
      ))}
    </>
  );
};
export default CarsList;
