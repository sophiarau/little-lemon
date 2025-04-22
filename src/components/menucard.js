import React from "react";

function MenuCard({ name, price, description, image }) {
  return (
    <div className="menucard">
      <h2>{name}</h2>
      {<img src={image} alt="Greek Salad" width="200px" height="200"/>}
      <p className="price">${price}</p>
      <p>{description}</p>
    </div>
  );
}
export default MenuCard;
