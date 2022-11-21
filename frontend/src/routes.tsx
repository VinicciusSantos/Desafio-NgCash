import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./containers/Login";
import Register from "./containers/Register";

const Rout = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
       </BrowserRouter>
   )
}

export default Rout;