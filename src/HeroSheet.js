import React from 'react';
import './HeroSheet.css';

const HeroSheet = ({hero}) => {
  return (
    <div className="heroSheet">
      <Status hero={hero} />
      <HeroMapBox title="Attributes" items={hero.attributes} />
      <HeroMapBox title="Skills" items={hero.skills} />
      <HeroListBox title="Languages" items={hero.languages} />
      <Inventory inventory={hero.inventory} />
    </div>
  )
}

const Status = ({hero}) => {
  return (
    <div className="heroBlock">
      <h3>Status</h3><hr />
      {hero.name}, Level {hero.level} {hero.characterClass}
    </div>
  );
}

const HeroMapBox = ({title, items}) => {
  return (
    <div className="heroBlock">
      <h3>{title}</h3><hr/>
      {items && Object.keys(items).map((item) => {
        return <div key={item}><em>{item}</em>: {items[item]}</div>;
      })}
    </div>
  );
}

const HeroListBox = ({title, items}) => {
  return (
    <div className="heroBlock">
      <h3>{title}</h3><hr/>
      {items && items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

const Inventory = ({inventory}) => {
  return (
    <div className="heroBlock">
      <h3>Inventory</h3><hr/>
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

export default HeroSheet;