import React from "react";
import CardItem from "../CardItem"

const CardList = ({cards}) => (
  <ul className="card-list">
    {cards.map( card => <CardItem {...card}  /> )}
  </ul>
)

export default CardList;
