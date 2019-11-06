import React from 'react';
import AddBox from '@material-ui/icons/AddBox';
import './HeroList.css';

const HeroList = ({heroes, setCurrentHero}) => {
  return (
     <div className="heroList">
      <div className="sidebarHeader">
        <span>heroes</span>
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

export default HeroList;