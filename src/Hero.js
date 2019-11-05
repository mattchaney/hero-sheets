import React from 'react';
import './Hero.css';

const Hero = ({hero}) => {
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

export default Hero;