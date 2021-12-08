import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

// const defaultState = {
//   pack: 0,
// };

// const reduser = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'GET':
//       return {...state, pack: state.pack + action.payload};
//     case 'SEND':
//       return {...state, pack: state.pack + action.payload};
//     default:
//       return state;
//   }
// };

// const store = createStore(reduser);

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
