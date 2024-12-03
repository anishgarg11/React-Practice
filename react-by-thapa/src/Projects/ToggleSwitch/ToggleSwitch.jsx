import React, { useEffect, useState } from "react";
import "./ToggleSwitch.css";
function ToggleSwitch() {
  const [isOn, setIson] = useState(true);

  const handleToggleSwitch = () => {
    setIson(!isOn);
  };

  // If change body background color
  // useEffect(() => {
  //   document.body.style.backgroundColor = isOn ? "#fff" : "#2f2f2f";
  // }, [isOn]);


  const ToggleStyle = 
  {backgroundColor: isOn ? "#4caf50" : "grey"}

  const checkIsOn = isOn? "on" : "off"
  return (
    <div className="toggle-switch" style={ToggleStyle} onClick={handleToggleSwitch}>
      <div className={`switch ${checkIsOn}`} >
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch;
