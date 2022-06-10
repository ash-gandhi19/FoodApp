import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Burger from "./components/Burger";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

const Url = "https://fod-app.herokuapp.com/food";
export const FoodContext = React.createContext();

function App() {
  let [data, setData] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState(cart.length);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(Url);
    setData(res.data);
  };

  return (
    <>
      <BrowserRouter>
        <FoodContext.Provider
          value={{ data, cart, setCart, cartValue, setCartValue }}
        >
          <Header />
          <Routes>
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/burger" element={<Burger />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </FoodContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
