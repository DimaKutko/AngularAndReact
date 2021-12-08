import React, { useState, useEffect } from "react";

const LifecycleUseEffect = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("updateMount");
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      console.log("willUnmount");
      clearInterval(timerId);
    };
  }, [date]);
  function tick() {
    setDate(new Date());
  }
  return (
    <div>
      <div>
        <h2>{date.toTimeString()}</h2>
      </div>
    </div>
  );
};
export default LifecycleUseEffect;
