import React from "react";

function MenuCard({ name, price, description, image }) {
  return (
    <div className="menucard">
        <div className="card-header">
            <h2>{name}</h2>
        </div>
        <div className="card-dishimage">
            <img src={image} alt="Dish" width="200px" height="200" />
        </div>
        <div className="card-price">
            <p className="price">${price}</p>
        </div>
        <div className="card-description">
            <p>{description}</p>
        </div>
        <div className="card-button">
            <button className="order-button">Order Now</button>
        </div>
    </div>
  );
}
export default MenuCard;
