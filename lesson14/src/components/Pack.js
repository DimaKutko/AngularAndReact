import React from "react";

const Pack = (props) => {
  console.log(props);

  return (
    <div>
      <h2>{props.state}</h2>
      <div>
        <button onClick={props.function.get}>GET</button>
      </div>
      <div>
        <button onClick={props.function.send}>SEND</button>
      </div>
    </div>
  );
};

export default Pack;
