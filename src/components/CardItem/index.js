import React from "react";

const CardItem = ({id, name, imageUrl}) => (
  <div className="single-card" key={id}>
    <img src={imageUrl} alt={name} className="card-image" />
    <p>{name}</p>
  </div>
)

export default CardItem;
