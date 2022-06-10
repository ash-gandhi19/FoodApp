import React from "react";
import { useContext } from "react";
import { FoodContext } from "../App";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Pizza() {
  let context = useContext(FoodContext);
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();
  let getData = () => {
    if (context.data.length > 0) {
      setProducts(context.data[0].subItemsData.subItems);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product-wrapper">
      <h2>Tasty Pizza</h2>
      <Link to="/">
        <div>HOME</div>
      </Link>
      {products.map((b, i) => {
        return (
          <div className="product-item-wrapper" key={i}>
            <div className="product-details">
              <b>{b.name}</b>
              <div className="product-price">&#8377; {b.price}</div>
              <div className="product-description">{b.description}</div>
              <button
                className="product-btn"
                onClick={() => {
                  context.cart.push(b);
                  context.setCartValue(context.cart.length);
                }}
              >
                Add to Cart
              </button>
              <div className="product-count"></div>
            </div>

            <div className="product-image">
              <img src={b.image} alt={b.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pizza;
