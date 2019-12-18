import React from "react";

import {CardsConsumer} from "../CardContext";
import CardItem from "../CardItem"

const emptyCardList = () => (
  <h3>No cards available</h3>
)

const populatedCardList =  (cards) => (
  <ul className="card-list">
    {cards.map( card => <CardItem {...card}  /> )}
  </ul>
);

const CardList = () => (
  <CardsConsumer.Consumer>
    { ({cards}) => cards.length ? populatedCardList(cards) : emptyCardList()}
  </CardsConsumer.Consumer>
)

export default CardList;
