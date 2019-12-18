import React, {createContext, useState, useEffect} from 'react';

const {Consumer, Provider} = createContext('cards');

const CardsProvider = () => {
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

  return (
    <Provider
      value={{cards, actions: {}}}
    />
  )
}

export const CardsConsumer = Consumer;
export default CardsProvider;
