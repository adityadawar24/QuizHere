import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SaleComponent from "./components/SaleComponent";
import { Route, Routes } from "react-router-dom";
import Women from "./pages/Women";
import Home from "./components/Home";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import ShoeBags from "./pages/ShoeBags";
import GenZ from "./pages/GenZ";
import HomeLiving from "./pages/HomeLiving";


const App = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <SaleComponent/>
        <Routes>
          <Route path="/women" element={<Women/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="/genz" element={<GenZ/>}/>
          <Route path="/shoes&bags" element={<ShoeBags/>}/>
          <Route path="/home&living" element={<HomeLiving/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>
    </>
  );
};

export default App;