import React from "react";
import Home from "./components/Home/Home";
import BrowseAll from "./components/Home/MainSection/BrowseAll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";





function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/browseall" element={<BrowseAll/>}></Route>

        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>


      </Routes>
    </Router>
    </>
  );
}

export default App;
