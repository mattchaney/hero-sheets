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

const HeroList = ({heroes, setCurrentHero}) => {
  return (
     <div className="heroList">
      <div className="sidebarHeader">
        <span>HEROES</span>
        <span className="addHero">
          <AddBox/>
        </span>
      </div>
      {heroes && heroes.map(hero => 
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
      <HeroStatus hero={hero} />
      <Inventory inventory={hero.inventory} />
    </div>
  )
}

const HeroStatus = ({hero}) => {
  return (
    <div>
      <h2>Status</h2><hr />
      {hero.name}, Level {hero.level} {hero.characterClass}
    </div>
  );
}

const Inventory = ({inventory}) => {
  return (
    <div>
      <h2>Inventory</h2><hr />
      {inventory && inventory.map((item) => <Item item={item}/>)}
    </div>
  );
}

const Item = ({item}) => {
  return (
    <div className="item">
      {item.count}x {item.name} {item.weight*item.count}{item.weightUnit}
      {item.extra && 
        Object.keys(item.extra).map((key) => {
          return (
            <div className="extra">
              <span className="filler"/>{key}: {item.extra[key]}
            </div>
          );
        })}
    </div>
  );
}

export default App;
