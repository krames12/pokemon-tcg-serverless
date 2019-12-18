import React, { useState } from 'react';
import './App.css';

import CardList from "./components/CardList";

const App = () => {
  const [cards, setCards] = useState([]);



  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon TCG Api Example</h1>
      </header>
      <main>
        <CardList cards={[]} />
      </main>
    </div>
  );
}

export default App;
