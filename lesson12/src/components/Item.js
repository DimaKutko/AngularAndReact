import React from "react";

export default function Item(props){
  return (
    <>
      <div>
        {props.model} {props.name}
      </div>
      <img src={props.img} alt={props.model} />
    </>
  );
};
