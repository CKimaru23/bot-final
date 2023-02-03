import React from "react";

const BotCard = ({ bot, onAddBot,onRelease, onDischarge, id }) => {

    
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <div className="bot-specs">
        <div className="spec">
          <span className="spec-name">Id:</span>
          <span className="spec-value">{bot.id}</span>
        </div>
        <div className="spec">
          <span className="spec-name">Bot Class:</span>
          <span className="spec-value">{bot.bot_class}</span>
        </div>
        <div className="spec">
          <span className="spec-name">Health:</span>
          <span className="spec-value">{bot.health}</span>
        </div>
        <div className="spec">
          <span className="spec-name">Damage:</span>
          <span className="spec-value">{bot.damage}</span>
        </div>
        <div className="spec">
          <span className="spec-name">Armor:</span>
          <span className="spec-value">{bot.armor}</span>
        </div>
        <div className="spec">
          <span className="spec-name">Created At:</span>
          <span className="spec-value">{bot.created_at}</span>
        </div>
        <div className="spec">
          <span className="spec-name">Updated At:</span>
          <span className="spec-value">{bot.updated_at}</span>
        </div>
      </div>
      <button className="add-bot-btn" onClick={() => onRelease(id)}>
        Release
      </button>
      <button className="add-bot-btn" onClick={() => onDischarge(bot)}>
        Delete
      </button>
    </div>
  );
};

export default BotCard;
