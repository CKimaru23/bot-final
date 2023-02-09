import React, { useState, useEffect } from "react";
import BotSpecs from "./BotSpecs";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import FilterBar from "./FilterBar";
import SortBar from "./SortBar";
import "./App.css";
import { useParams } from 'react-router';

const App = () => {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [sortConfig, setSortConfig] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  useEffect(() => {
    setFilteredBots(
      bots.filter((bot) => {
        return bot.health;
      })
    );
  }, [bots, sortConfig]);

  const handleAddBot = (bot) => {
    if (!selectedBots.find((b) => b.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const handleReleaseBot = (id) => {
    setBots(selectedBots.filter((bot) => bot.id !== id));
    // console.log(`${id} deleted`)
    
    
  };

  // const handleDischargeBot = () => {
  //   setSelectedBots([]);
  // };

  // const handleSort = (key) => {
  //   let direction = sortConfig.direction;
  //   if (sortConfig.key === key) {
  //     direction = sortConfig.direction * -1;
  //   }
  //   setSortConfig({ key, direction });
  // };

  const handleSort = (property) => {
    setBots([...bots].sort((a, b) => (a[property] > b[property] ? 1 : -1)));
  };

  // const handleFilter = (min, max) => {
  //   setSortConfig({ ...sortConfig, healthRange: [min, max] });
  // };

  const handleFilter = (value) => {
    setBots(bots.filter((bot) => bot.bot_class === value));
  };

  function refreshPage() {
    window.location.reload(false);
    }
  
    const { id } = useParams();

    function handleDischargeBot(){
      const url = `http://localhost:3000/bots/${id}`
      const answer = window.confirm('Are you sure you want to delete this bot ?')
      if(answer === true){
          fetch(url,{
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(() => {
              const deletedBot  = bots.filter((b)=>b.id !== id)
              console.log(deletedBot);
              console.log("Deleted")
          })
      }
    }

    // const [displayedCards, setDisplayedCards] = useState(bots);

    // const handleReleaseBot = (id) => {
    //   setDisplayedCards(displayedCards.filter(card => card.id !== id));
    // };
   
  return (
    <div className="App">
      <h1 className="header">Bot Management System</h1>
      <FilterBar onFilter={handleFilter} setBots={setBots}/>
      <SortBar onSort={handleSort} />
      <button onClick={refreshPage} style={{fontSize:'1rem', color:'red'}}>Click here to <b>Refilter and Resort</b></button>
      <YourBotArmy bots={selectedBots} onRelease={handleReleaseBot} onDischarge={handleDischargeBot} />
      <BotCollection bots={filteredBots} id={id} onAddBot={handleAddBot} onDischarge={handleDischargeBot} onRelease={handleReleaseBot}/>
      {/* <BotSpecs selectedBots={selectedBots} /> */}
    </div>
  );
};

export default App;
