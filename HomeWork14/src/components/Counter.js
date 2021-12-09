import React from "react";

const Counter = (props) => {
    return (
        <>
            <h1>{props.state}</h1>
            <button onClick={props.action.up}>UP</button>
            <button onClick={props.action.down}>DOWN</button>
        </>
    )
};

export default Counter;