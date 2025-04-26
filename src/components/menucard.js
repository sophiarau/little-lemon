import React from "react";
import dishIcon from "../assets/Dishicon.svg"

function MenuCard({ name, price, description, image }) {
  return (
    <div className="menucard">
      <div className="card-header">
        <img src={dishIcon} alt="Dish icon" width="29px" height="20px"/>
        <h2>{name}</h2>
      </div>
      {<img src={image} alt="Greek Salad" width="200px" height="200"/>}
      <p className="price">${price}</p>
      <p>{description}</p>
    </div>
  );
}
export default MenuCard;
