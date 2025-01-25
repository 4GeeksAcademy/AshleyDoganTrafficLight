import React from "react";
import { useState } from "react";

//create your first component
// const [color, setColor] = useState("red");

// const lightUp = (color) => {
//   setColor(color);
// };

const Home = () => {
  return (
    <>
      <div className="post"></div>
      <div className="rectangle">
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
      </div>
    </>
  );
};

export default Home;
