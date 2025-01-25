import React from "react";
import { useState } from "react";

//create your first component

const Home = () => {
  const [color, setColor] = useState(null);

  const handleClick = (color) => {
    setColor(color);
  };

  return (
    <>
      <div className="post"></div>
      <div className="rectangle">
        <div
          onClick={() => setColor("red")}
          className={"redLight" + (color === "red" ? " selected" : "")}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={"yellowLight" + (color === "yellow" ? " selected" : "")}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={"greenLight" + (color === "green" ? " selected" : "")}
        ></div>
      </div>
    </>
  );
};

export default Home;
