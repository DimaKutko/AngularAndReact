import { createStore, combineReducers } from "redux";
import { packReducer } from "./packReducer";
import { todoReducer } from "./todoReducer";
import { compooseWithDevTools } from "redux-devtools-extension";
import { momentReducer } from "./momentReducer";

const rootReducer = combineReducers({
  pack: packReducer,
  todo: todoReducer,
  moment: momentReducer,
});

export const store = createStore(
  rootReducer,
  compooseWithDevTools,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);
