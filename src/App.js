import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Women from "./pages/Women";
import Home from "./components/Home";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import { Signup } from "./pages/Signup/Signup";
import {Login} from "./pages/Login/Login";



const App = () => {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path="/women" element={<Women/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>
    </>
  );
};

export default App;