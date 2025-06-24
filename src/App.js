// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/taskboard" element={<TaskBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
