import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Todolist from "./components/Todolist";
import Main from "./components/Main";
import Lifecycle from "./components/Lifecycle";
import LifecycleUseEffect from "./components/LifecycleUseEffect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Main />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/lifecycleUseEffect" element={<LifecycleUseEffect />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
