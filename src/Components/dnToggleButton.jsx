import React, { useState, useEffect } from "react";

const dnToggleButton = () => {
    // Manage theme state
    const [isDaylight, setIsDaylight] = useState(() => {
      // Get the initial theme from localStorage or default to daylight (light mode)
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "night" ? false : true;
    });
  
    // Change theme (light/dark)
    const handleToggle = () => {
      const newTheme = !isDaylight;
      setIsDaylight(newTheme);
      localStorage.setItem("theme", newTheme ? "daylight" : "night");
    };
  
    // Apply theme to the body
    useEffect(() => {
      if (isDaylight) {
        document.body.classList.remove("night");
        document.body.classList.add("daylight");
      } else {
        document.body.classList.remove("daylight");
        document.body.classList.add("night");
      }
    }, [isDaylight]);
  
    return (
      <div className="dntoggle">
        <input
          type="checkbox"
          id="theme-toggle"
          checked={isDaylight}
          onChange={handleToggle}
          className="toggle-checkbox"
        />
        <label htmlFor="theme-toggle" className={`dn-switch ${isDaylight ? "checked" : ""}`}>
          <span className="toggle-circle"></span>
        </label>
        <label htmlFor="theme-toggle" className="toggle-label">
          {isDaylight ? "Daylight" : "Night"}
        </label>
      </div>
    );
  };

export default dnToggleButton

