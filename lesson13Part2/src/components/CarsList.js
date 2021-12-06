import React from "react";
import { CardGroup } from "react-bootstrap";
import Car from "./Car"

const CarsList = (props) => {
    return (
        <CardGroup>
            {props.data.map(item => (
                <Car key={item.id} {...item}></Car>
            ))}
        </CardGroup>
    )
}

export default CarsList

