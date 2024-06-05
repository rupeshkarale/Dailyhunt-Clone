import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Manynews } from "./components/Manynews/Manynews";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Foryou from "./components/foryou/Foryou";
function App() {
  useEffect(() => {
    document.title = "DailyHunt Clone";
    const faviconLink = document.querySelector("link[rel='icon']");
    if (faviconLink) {
      faviconLink.href =
        "https://images.sftcdn.net/images/t_app-icon-m/p/ed7c8226-a4ec-11e6-927f-00163ed833e7/2071148802/newshunt-logo";
    }
  }, []);

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
