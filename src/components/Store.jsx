// import "./css/main.css";
import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";

const Store = () => {
  const [activeButton, setActiveButton] = useState("view_list");

  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      <div>
        <IconSwitch
          icon={activeButton}
          onSwitch={() => {
            console.log("change state here", activeButton);
            setActiveButton(
              activeButton === "view_list" ? "view_module" : "view_list"
            );
          }}
        />
      </div>
      <div className='portfolio' style={{ width: "100%" }}>
        {activeButton === "view_list" ? <ListView /> : <CardsView />}
      </div>
    </div>
  );
};

export default Store;
