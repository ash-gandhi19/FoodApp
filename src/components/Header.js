import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";

function Header() {
  let context = useContext(FoodContext);
  return (
    <div className="header-wrapper">
      <h1>Food Order Portal</h1>
      <Link to="/cart">
        <div className="cart-icon">
          <ShoppingCartIcon />
          <span className="cart-count">{context.cartValue}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
