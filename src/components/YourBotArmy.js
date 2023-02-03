import React from "react";
import ArmyBotCard from "./ArmyBotCard";

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h1 className="your-bot-army__title">Your Bot Army</h1>
      <div className="your-bot-army__bots">
        {bots.map((bot) => (
          <ArmyBotCard
            key={bot.id}
            bot={bot}
            onDischarge={onDischarge}
            onRelease={onRelease}
          />
          
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
