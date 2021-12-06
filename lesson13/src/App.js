import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsList from "./components/CarsList";
import Creator from "./components/Creator";
import Layout from "./components/Layout";
import Test from "./components/Test";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="test" element={<Test />} />
          <Route path="cars" element={<CarsList />} />
          <Route path="car/:id" element={<Test />} />
          <Route path="creator" element={<Creator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
