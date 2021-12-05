import React from "react";
import Item from "./Item";

const CarsList = (props) => {
    console.log(props);
  return (
    <>
      {props.data.map( item => (
        <Item key={item.id} {...item}></Item>
      ))}
    </>
  );
};
export default CarsList;
