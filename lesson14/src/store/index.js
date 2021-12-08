import { combineReducers, createStore } from "redux";
import todoReduser from "./todo_reduser";
import packReduser from "./pack_reduser";
import { rde } from "redux-devtools-extension";

const rootReducer = combineReducers({
  packReduser: packReduser,
  todoReduser: todoReduser,
});

export const store = createStore(rootReducer, rde, window.devToolsExtension ? window.devToolsExtension() : f => f)

// export const store = createStore(rootReducer);
