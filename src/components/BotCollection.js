import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, onAddBot, onDischarge, onRelease,id }) => {
    
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onAddBot={onAddBot} onDischarge={onDischarge} id={id}onRelease={onRelease}/>
      ))}
    </div>
  );
};

export default BotCollection;
