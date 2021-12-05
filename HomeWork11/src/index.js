import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Task1 from "./components/Task1";
import reportWebVitals from "./reportWebVitals";
import movie from "./models/movie.js"
import user from "./models/user.js"
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import cat from "./models/cat";
import Task4 from "./components/Task4";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Task1 movie={movie}/>
    <Task2 user={user}/>
    <Task3 />
    <Task4 cat={cat}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
