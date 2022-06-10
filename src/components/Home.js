import React, { useContext } from "react";
import { Fragment } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";

function Home() {
  let context = useContext(FoodContext);
  return (
    <div className="Home-wrapper">
      {context.data.map((b, i) => {
        return (
          <Fragment key={i}>
            <Link to={"/" + b.name.toLowerCase()}>
              <div className="item-wrapper">
                <img src={b.image} className="item-image" alt="food"></img>
                <div className="item-name">{b.name}</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
