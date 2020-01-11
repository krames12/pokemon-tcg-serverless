import React, { useContext } from "react";

import CardItem from "../CardItem"

const emptyCardList = () => (
  <h3>No cards available</h3>
)

const populatedCardList =  (cards) => (
  <ul className="card-list">
    {cards.map( card => <CardItem {...card}  /> )}
  </ul>
);

const CardList = (cardsContext) => {
  const {cards} = useContext(cardsContext);

  cards.length ?
    populatedCardList(cards) :
    emptyCardList()
}

export default CardList;
