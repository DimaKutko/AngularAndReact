import React, { useState } from "react";

export default function Like() {
  let [state, setState] = useState(0);

  const doLike = () => {
    setState(++state);
  };

  const doUnlike = () => {
    setState(state--);
  };

  return (
    <>
      <br />
      <button onClick={doLike} type="button">
        Like 
      </button>
      {state}
      <button onClick={doUnlike} type="button">
        Unlike 
      </button>
    </>
  );
}
