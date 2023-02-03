import React from 'react';

const BotSpecs = ({ bot }) => {
  return (
    <div className="bot-specs">
      <h2 className="bot-specs__title">{bot.name}</h2>
      <ul className="bot-specs__list">
        <li className="bot-specs__item">
          <span className="bot-specs__label">Health:</span>
          <span className="bot-specs__value">{bot.health}</span>
        </li>
        <li className="bot-specs__item">
          <span className="bot-specs__label">Damage:</span>
          <span className="bot-specs__value">{bot.damage}</span>
        </li>
        <li className="bot-specs__item">
          <span className="bot-specs__label">Armor:</span>
          <span className="bot-specs__value">{bot.armor}</span>
        </li>
      </ul>
    </div>
  );
};

export default BotSpecs;
