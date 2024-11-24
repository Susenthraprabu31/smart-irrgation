import React, { useState } from "react";
import "./togglebutton.css"

const toggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-checkbox"
      />
      <label htmlFor="toggle" className={`toggle-switch ${isChecked ? "checked" : ""}`}>
        <span className="toggle-circle"></span>
      </label>
      <label htmlFor="toggle" className="toggle-label">{isChecked ? "On" : "Off"}</label>
    </div>
  );
};

export default toggleButton;
