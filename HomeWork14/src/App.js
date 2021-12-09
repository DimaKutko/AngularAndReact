import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Todolist from './components/Todolist';
import Main from './components/Main';
import Counter from './components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import Hook from './components/Hook';
import Lifecycle from './components/Lifecycle';
import {addTodoAction, removeTodoAction} from "./store/todoReducer"

function App() {
  const dispatch = useDispatch();
  const pack = useSelector(state => state.pack.pack);
  const todo = useSelector(state => state.todo.todos);

  const up = () => {
    dispatch({type:"GET", payload: 1})
  };
  const down = () => {
    dispatch({type: "SEND", payload: 1})
  };

  const addTodo = (title) => {
    const todo = {
      title,
      id: Date.now()
    }
    dispatch(addTodoAction(todo))
  };

  const removeTodo = (todo) => {
    dispatch(removeTodoAction(todo.id))
  };

  const todoFunction = {
    addTodo, removeTodo
  }


  const action = {
    up, down
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Main />}/>
          <Route path='/todolist' element={<Todolist state={todo} action={todoFunction} />} />
          <Route path='/news' element={<Counter action={action} state={pack}/>}/>
          <Route path='/hook' element={<Hook />} />
          <Route path='/lifecycle' element={<Lifecycle />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
