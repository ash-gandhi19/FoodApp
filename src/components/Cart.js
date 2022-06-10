import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { FoodContext } from "../App";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Cart() {
  let context = useContext(FoodContext);
  let navigate = useNavigate();

  function assigncount() {
    context.cart.map((b) => (b.count = 1));
  }
  useEffect(() => {
    assigncount();
    navigate("/cart");
  }, []);

  let cartPrice = 0;
  return (
    <div className="product-wrapper">
      <div className="order">
        <Link to="/">
          <button
            className="place-order"
            onClick={() => {
              context.setCart([]);
              context.setCartValue(0);
            }}
          >
            PLACE ORDER
          </button>
        </Link>
      </div>
      {context.cart.length > 0 ? (
        <>
          <div className="cart-title">Cart</div>
          {context.cart.map((b, i) => {
            cartPrice += Number(b.price) * Number(b.count);
            return (
              <div className="product-item-wrapper" key={i}>
                <div className="product-details">
                  <b>{b.name}</b>
                  <div className="product-price">&#8377; {b.price}</div>
                  <div className="product-description">{b.description}</div>
                  <div className="arrow-btn">
                    <button
                      className="triangle-left"
                      onClick={() => {
                        let arr = [...context.cart];
                        arr[i].count--;
                        context.setCart(arr);
                      }}
                    >
                      <ArrowBackIosNewIcon />
                    </button>
                    <span className="count-display">{b.count}</span>
                    <button
                      className="triangle-right"
                      onClick={() => {
                        let arr = [...context.cart];
                        arr[i].count++;
                        context.setCart(arr);
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>

                <div className="product-image">
                  <button
                    className="cancle-btn"
                    onClick={() => {
                      context.cart.splice(context.cart.indexOf(b), 1);
                      let arr = [...context.cart];
                      context.setCart(arr);
                      context.setCartValue(arr.length);
                    }}
                  >
                    <CancelIcon />
                  </button>
                  <img src={b.image} alt={b.name} />
                </div>
              </div>
            );
          })}
          <div className="price-card">
            <div className="price-value">Total Price:{cartPrice}</div>

            <Link to="/">
              <div>HOME</div>
            </Link>
          </div>
        </>
      ) : (
        <h3 className="empty-cart">Your Cart is Empty</h3>
      )}
    </div>
  );
}

export default Cart;
