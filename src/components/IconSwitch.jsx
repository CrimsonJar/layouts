import React, { useState } from "react";
import "./Toolbar.css";

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <>
      <div>
        <button onClick={() => onSwitch()}>
          <i className='material-icons'>{icon}</i>
        </button>
      </div>
    </>
  );
};

export default IconSwitch;
