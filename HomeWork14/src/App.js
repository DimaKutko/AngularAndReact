import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Todolist from "./components/Todolist";
import Main from "./components/Main";
import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import Hook from "./components/Hook";
import Lifecycle from "./components/Lifecycle";
import { addTodoAction, removeTodoAction } from "./store/todoReducer";
import {
  addMomentAction,
  removeMomentAction,
  addCommentAction,
} from "./store/momentReducer";
import Moments from "./components/Moments";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos);
  const moment = useSelector((state) => state.moment.moments);

  const addTodo = (title) => {
    const todo = {
      title,
      id: Date.now(),
    };
    dispatch(addTodoAction(todo));
  };

  const removeTodo = (todo) => {
    dispatch(removeTodoAction(todo.id));
  };

  const addMoment = (title) => {
    const moment = {
      title,
      id: Date.now(),
    };
    dispatch(addMomentAction(moment));
  };

  const addComment = (id, comment) => {
    const upd = { id, comment };

    dispatch(addCommentAction(upd));
  };

  const removeMoment = (moment) => {
    dispatch(removeMomentAction(moment.id));
  };

  const momentFunction = {
    addMoment,
    addComment,
    removeMoment,
  };

  const todoFunction = {
    addTodo,
    removeTodo,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Main />} />
          <Route
            path="/todolist"
            element={<Todolist state={todo} action={todoFunction} />}
          />
          <Route path="/hook" element={<Hook />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route
            path="/moments"
            element={<Moments state={moment} action={momentFunction} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
