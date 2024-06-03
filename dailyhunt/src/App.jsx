import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Manynews } from "./components/Manynews/Manynews";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Foryou from "./components/foryou/Foryou";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Foryou />}></Route>
          <Route path="/:news" element={<Manynews />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
