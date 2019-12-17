import React from "react";
import CardItem from ".../Card"

const CardList = ({cards}) => (
  <ul className="card-list">
    {cards.map( card => <CardItem {...card}  /> )}
  </ul>
)

export default CardList;
