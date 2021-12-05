import React from "react";

const Form = () => {
  let uRef = React.createRef();
  const handlerSubmit = (event) => {
    event.preventDefault();

    alert(uRef.current.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input type="text" id="userName" ref={uRef} />
      <input type="submit" value="Click me" />
    </form>
  );
};

export default Form;
