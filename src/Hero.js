import React from 'react';
import './Hero.css';

const Hero = ({hero}) => {
  return (
    <div className="hero">
      <Status hero={hero} />
      <Map title="Attributes" items={hero.attributes} />
      <Map title="Skills" items={hero.skills} />
      <List title="Languages" items={hero.languages} />
      <Inventory inventory={hero.inventory} />
    </div>
  )
}

const Status = ({hero}) => {
  return (
    <div className="heroBlock">
      <h2>Status</h2><hr />
      {hero.name}, Level {hero.level} {hero.characterClass}
    </div>
  );
}

const Map = ({title, items}) => {
  return (
    <div className="heroBlock">
      <h2>{title}</h2><hr/>
      {items && Object.keys(items).map((item) => {
        return <div key={item}><em>{item}</em>: {items[item]}</div>;
      })}
    </div>
  );
}

const List = ({title, items}) => {
  return (
    <div className="heroBlock">
      <h2>{title}</h2><hr/>
      {items && items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

const Inventory = ({inventory}) => {
  return (
    <div className="heroBlock">
      <h2>Inventory</h2><hr/>
      {inventory && inventory.map((item) => {
        return <Item key={item.name} item={item}/>;
      })}
    </div>
  );
}

const Item = ({item}) => {
  return (
    <div className="item">
      {item.count}x <strong>{item.name}</strong> {item.weight*item.count}{item.weightUnit}
      {item.extra && 
        Object.keys(item.extra).map((key) => {
          return (
            <div key={key} className="extra">
              <span className="filler"/>{key}: {item.extra[key]}
            </div>
          );
        })}
    </div>
  );
}

export default Hero;