import React from 'react';


const FilterBar = ({ onFilter, setBots }) => {
  return (
    <>
         <h2>Filter Bots by Class: </h2>
    
    <div className="filter-bar"  style={{marginBottom: '15px'}} >
     
      <div className="filter-options">
        
          <input
            type="radio"
            value="Support"
            id="support"
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Support</label>
        
        
          <input
            type="radio"
            value="Medic"
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Medic</label>
        
        
          <input
            type="radio"
            value="Assault"
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Assault</label>
        
        
          <input
            type="radio"
            value="Defender"
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Defender</label>
        
          <input
            type="radio"
            value="Captain"
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Captain</label>
        
          <input
            type="radio"
            value="Witch"
            onChange={(e) => onFilter(e.target.value)}
          />
        <label>Witch</label>
          
        
      </div>
    </div>
    </>
  );
};

export default FilterBar;
