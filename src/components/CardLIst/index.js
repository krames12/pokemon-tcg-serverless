import React, {useState, useEffect} from "react";

import CardItem from "../CardItem"

const emptyCardList = () => (
  <h3>No cards available</h3>
)

const populatedCardList =  (cards) => (
  <ul className="card-list">
    {cards.map( card => <CardItem {...card}  /> )}
  </ul>
);

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const request = await fetch("/.netlify/functions/getCards");
      const payload = await request.json();
      return payload;
    }

    const cards = getCards();
    cards.then(({cards}) => setCards(cards)).catch(error => console.log(error));
  }, []);

  return cards.length ? populatedCardList(cards) : emptyCardList();
}

export default CardList;
