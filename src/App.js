import React, { useState } from 'react';
import './App.css';
import AddBox from '@material-ui/icons/AddBox';

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
      {currentHero && <HeroContent
          hero={currentHero}
          setCurrentHero={setCurrentHero}
      />}
      </div>
    </div>
  );
}

const HeroList = ({heroes, currentHero, setCurrentHero}) => {
  const hero = heroes[currentHero];
  return (
     <div className="heroList">
      <div className="sidebarHeader">
        <span>Heroes</span>
        <span className="addHero">
          <AddBox/>
        </span>
      </div>
      {heroes.map(hero => 
        <HeroSummary
            key={hero.name}
            hero={hero} 
            setCurrentHero={setCurrentHero} />
      )}
     </div>
  );
}

const HeroSummary = ({hero, setCurrentHero}) => {
  return (
     <div className="heroSummary" onClick={() => setCurrentHero(hero)}>
        <div>{hero.name}</div>
        <div>Level {hero.level} {hero.characterClass}</div>
     </div>
  )
}

const HeroContent = ({hero, setCurrentHero}) => {
  return (
    <div className="heroCard">
      {hero.name}, Level {hero.level} {hero.characterClass}
    </div>
  )
}

export default App;
