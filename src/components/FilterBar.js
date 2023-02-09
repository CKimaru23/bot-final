import React, {useState} from 'react';


const FilterBar = ({ onFilter, setBots }) => {
  const [checkedSupport, setCheckedSupport] = useState(false) 
  const [checkedMedic, setCheckedMedic] = useState(false)
  const [type, setType] = useState(" ")

  const handleClick = (type) => {
    switch(type){
      case "Support":
        setCheckedSupport(true)
        break;
      case "Medic":
        setCheckedMedic(true)
      break;


    }

  }

  
  return (
    <>
         <h2>Filter Bots by Class: </h2>
    
    <div className="filter-bar"  style={{marginBottom: '15px'}} >
     
      <div className="filter-options">
        
          <input
            type="radio"
            value="Support" 
            checked={checkedSupport}
            onClick = {() => {
              setType("Support")
              handleClick(type)
            }}
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Support</label>
        
        
          <input
            type="radio"
            value="Medic"
            checked={checkedMedic}
            onClick = {() => {
              setType("Medic")
              handleClick(type)
            }}
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Medic</label>
        
        
          <input
            type="radio"
            value="Assault"
            // checked={checked}
            // onClick = {handleClick}
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Assault</label>
        
        
          <input
            type="radio"
            value="Defender"
            // checked={checked}
            // onClick = {handleClick}
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Defender</label>
        
          <input
            type="radio"
            value="Captain"
            // checked={checked}
            // onClick = {handleClick}
            onChange={(e) => onFilter(e.target.value)}
          />
          <label>Captain</label>
        
          <input
            type="radio"
            value="Witch"
            // checked={checked}
            // onClick = {handleClick}
            onChange={(e) => onFilter(e.target.value)}
          />
        <label>Witch</label>
          
        
      </div>
    </div>
    </>
  );
};

export default FilterBar;
