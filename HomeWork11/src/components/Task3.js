import React, { useState } from "react";
import "./../App.css";

//Незнаю зачем так усложнять, задание требует таких изврощений 
export default function Task3() {
  let [time, setTime] = useState("ttt");

  setInterval(() => {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setTime(time);
  }, 1000);

  return (
    <>
      <h5>TASK 3</h5>
      <Time time={time} />
    </>
  );
}

function Time(props) {
  return <h2>Time: {props.time}</h2>;
}
