import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Car from './components/Car';
import img from './assets/car.jpg';
import Like from './components/Like';
import Book from './components/Book';

const car = {
  name: 'audi',
  price: 100000,
  img: img,
  discription: "Car is good",
  creator: {
    name: "August",
    surname: "Horch"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Car car={car} />
    <Like/>
    <Book/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
