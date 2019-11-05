import React, { useState } from 'react';
import './App.css';

import HeroList from './HeroList';
import Hero from './Hero';

import defaultHeroes from './defaultHeroes';

const App = () => {
  const [heroes, setHeroes] = useState(defaultHeroes);
  const [currentHero, setCurrentHero] = useState(0);

  return (
    <div className="root">
      <HeroList 
        heroes={heroes}
        currentHero={currentHero}
        setCurrentHero={setCurrentHero}
      />
      <div className="root">
      {currentHero && 
        <Hero
          hero={currentHero}
          setCurrentHero={setCurrentHero}/>}
      </div>
    </div>
  );
}

export default App;
