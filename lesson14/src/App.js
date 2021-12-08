import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Todolist from "./components/Todolist";
import Main from "./components/Main";
import Lifecycle from "./components/Lifecycle";
import LifecycleUseEffect from "./components/LifecycleUseEffect";
import { useDispatch, useSelector } from "react-redux";
import Pack from "./components/Pack";

function App() {
  const dispatch = useDispatch();
  const pack = useSelector((state) => state.packReduser.pack);

  const get = () => {
    dispatch({ type: "GET", payload: 1 });
  };

  const send = () => {
    dispatch({ type: "SEND", payload: -1 });
  };

  const actionPack = { get, send };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Main />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/lifecycleUseEffect" element={<LifecycleUseEffect />} />
          <Route path="/pack" element={<Pack state={pack} function={actionPack} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
