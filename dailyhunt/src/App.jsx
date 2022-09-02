import "./App.css";
import React from "react";
import {  Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Foryou from "./components/foryou/Foryou";
function App() {
  return (
    <div className="App">
      <Navbar  />
      <div style={{display:"flex",width:"100%"}} >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Foryou />}></Route>
          <Route path="/" element={<Foryou />}></Route>
          <Route path="/:news" element={<Foryou />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
