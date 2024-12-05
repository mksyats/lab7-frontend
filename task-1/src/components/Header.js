import React from "react";
import { getRandomColor } from "../utils/utils";


function Header() {
  const changeColor = (event) => {
    const randomBgColor = getRandomColor();
    const randomTextColor = getRandomColor();
    event.target.style.backgroundColor = randomBgColor;
    event.target.style.color = randomTextColor;
  };

  return (
    <div>
      <h2 id="author" onClick={changeColor}>
        Яценко Максим Ігорович
      </h2>
    </div>
  );
}

export default Header;
