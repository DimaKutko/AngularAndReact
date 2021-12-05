import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import club from "./models/club";

function NotFound() {
  return <h2>Not found</h2>;
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Task1 />} />
          <Route exact path="/task1" element={<Task1 club={club} />} />
          <Route exact path="/task2/" element={<Task2 data={city} />} />
          <Route exact path="/task2/city" element={<Task2 data={city} />} />
          <Route exact path="/task2/park" element={<Task2 data={park} />} />
          <Route exact path="/task2/dyk" element={<Task2 data={dyk} />} />

          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const city = {
  img: "https://all.accor.com/magazine/imagerie/kartinka-1-9438.jpg",
  info: 'Одесса – это портовый город на Черном море в южной части Украины. Он известен своими пляжами и архитектурой XIX века, например зданием Одесского театра оперы и балета. Потемкинская лестница, получившая всемирную известность благодаря фильму "Броненосец Потемкин", ведет к морю, где расположен Воронцовский маяк. Вдоль побережья тянется Приморский бульвар. Здесь можно прогуляться и полюбоваться прибрежными особняками и памятниками.',
};

const dyk = {
  img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Пам%27ятник_генерал-губернатору_Новоросійського_краю_А.Е._Ришельє%2C_Одеса_DSC8083.jpg",
  info: "Памятник дюку де Ришельё в Одессе — бронзовый монумент в полный рост, посвящённый Арману Эмманюэлю дю Плесси, герцогу де Ришельё, открыт в 1828 году. Первый памятник, установленный в Одессе",
};

const park = {
  img: "https://100dorog.ru/upload/contents/678/2012/5983498-2012092603435723.jpg",
  info: "Парк Шевче́нко — парк в Одессе. Территория парка ограничивается улицами Маразлиевской, Успенской и Лидерсовским бульваром",
};
