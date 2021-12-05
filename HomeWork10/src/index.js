import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import reportWebVitals from "./reportWebVitals";
import book from "./models/book";
import group from "./models/group";
import recipe from "./models/recipe";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Task1 book={book} />
    <Task2 group={group} />
    <Task3 recipe={recipe} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
