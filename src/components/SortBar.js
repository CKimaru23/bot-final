import React from 'react';

const SortBar = ({ onSort }) => {
  return (
    <div className="sort-container">
      <span className="sort-text" style={{fontSize:'1.5rem'}}>Sort by:</span>
      <select className="sort-select" onChange={(e) => onSort(e.target.value)}>
        <option value="default">Default</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
