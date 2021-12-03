import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Task1 from "./components/Task1";
import reportWebVitals from "./reportWebVitals";

const book = {
  name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
  img: "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg",
  author: "Ashlee Vance",
  discription: `New York Times and International Bestseller 
Named One of the Best Books of the Year by The Wall Street Journal, NPR, Audible and Amazon
More than 2 million copies sold In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs--a real-life Tony Stark--and a fascinating exploration of the renewal of American invention and its new "makers."
Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius's life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.
Vance uses Musk's story to explore one of the pressing questions of our age: can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk--one of the most unusual and striking figures in American business history--is a contemporary, visionary amalgam of legendary inventors and industrialists including Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far-reaching as the visionaries of the golden age of science-fiction fantasy.
Thorough and insightful, Elon Musk brings to life a technology industry that is rapidly and dramatically changing by examining the life of one of its most powerful and influential titans.`,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Task1  book={book}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
