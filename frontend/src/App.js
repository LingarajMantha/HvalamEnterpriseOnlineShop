import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {< Home />} />
        <Route path = '/login' element = {< Login />} />
        <Route path = '/signup' element = {< Signup />} />
        <Route path = '/payment' element = {< Payment />} />
        <Route path = '/product' element = {< Product />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
