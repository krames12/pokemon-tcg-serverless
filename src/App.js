import React from 'react';
import './App.css';

import CardList from "./components/CardList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon TCG Api Example</h1>
      </header>
      <main>
        <CardList cards={[{name: "Cubone"}]} />
      </main>
    </div>
  );
}

export default App;
