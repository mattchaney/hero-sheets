import React, { useState } from 'react';
import HeroList from './HeroList';
import HeroSheet from './HeroSheet';
import './App.css';

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
      {currentHero &&
        <HeroSheet
          hero={currentHero}
          setCurrentHero={setCurrentHero}/>}
    </div>
  );
}

export default App;
