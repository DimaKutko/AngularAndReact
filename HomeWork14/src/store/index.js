import {createStore, combineReducers} from "redux";
import {packReducer} from "./packReducer"
import {todoReducer} from "./todoReducer";
import {compooseWithDevTools} from "redux-devtools-extension"

const rootReducer = combineReducers({
    pack: packReducer,
    todo: todoReducer
});

export const store = createStore(rootReducer, compooseWithDevTools, window.devToolsExtension ? window.devToolsExtension() : f => f);