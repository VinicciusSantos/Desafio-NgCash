import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";

import Login from "./containers/Login";
import Register from "./containers/Register";

const Rout = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
       </BrowserRouter>
   )
}

export default Rout;