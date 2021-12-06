import React from "react";
import { useParams } from "react-router";
import cars from "./../models/cars"
import Car from "./Car";



const Item = () => {
    const {id} = useParams()
    const car = cars.filter((val) => {
        // eslint-disable-next-line eqeqeq
        return val.id == id
    })[0];
    return (
        <Car key={car.id} {...car}></Car>
    )
}
export default Item;
