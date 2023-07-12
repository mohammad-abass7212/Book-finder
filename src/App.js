import React from "react";
import Main from "./Components/Main";
import DetailPage from "./Components/DetailPage";
import "./Components/style.css";
import { Link, Route, Routes } from "react-router-dom";
import Favourit from "./Components/Favourit";
function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/"> Home </Link>
        <Link to="/favourit"> Wishlist </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/favourit" element={<Favourit />} />
      </Routes>
    </>
  );
}

export default App;
