import React, { useState } from 'react';
import './App.css'; // Import any necessary CSS file for styling

function App() {
  // State variables to track toggle states and slider value
   
  const [sliderValue, setSliderValue] = useState(10);
   // Initial value for the slider
   const [button1Active, setButton1Active] = useState(false);
   const [button2Active, setButton2Active] = useState(false);
 
   const handleButton1Click = () => {
     setButton1Active(!button1Active);
     
   };
 
   const handleButton2Click = () => {
    setButton2Active(!button2Active);
    
  };
  
   

  

  // Function to handle slider value change
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className='container'>
      
      <div className="blackboard">
        <div className="controls">
          <div>
          <button className={`toggle ${button1Active ? 'active' : ''}`} onClick={handleButton1Click}></button>
        </div>
        <div>
        <button className={`toggle ${button2Active ? 'active' : ''}`} onClick={handleButton2Click}></button> 
        </div>
      </div>

      <div className="sliderdiv">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          style={{ opacity: sliderValue / 200 + 0.5 }}
          className='slider'
        />
      </div>
    
    </div>
    </div>
    
  );
}

export default App;
