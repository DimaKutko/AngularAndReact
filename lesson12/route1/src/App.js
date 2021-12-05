import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles.css";

function Painter() {
  return (
    <>
      <h2>Пикассо, Пабло</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg" />
    </>
  );
}
function Art() {
  return (
    <>
      <h2>Постоянство памяти</h2>
      <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/dd/The_Persistence_of_Memory.jpg/1200px-The_Persistence_of_Memory.jpg" />
    </>
  );
}
function Bio() {
  return <div>
    Па́бло Руи́с-и-Пика́ссо, полное имя — Па́бло Дие́го Хосе́ Франси́ско де Па́ула Хуа́н Непомусе́но Мари́я де лос Реме́диос Сиприа́но де ла Санти́сима Тринида́д Ма́ртир Патри́сио Руи́с-и-Пика́ссо — испанский и французский художник, скульптор, график, театральный художник, керамист и дизайнер.
  </div>;
}
function NotFound() {
  return <h2>Not found</h2>;
}
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Painter />} />
          <Route path="/art" element={<Art />} />
          <Route path="/bio" element={<Bio />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
