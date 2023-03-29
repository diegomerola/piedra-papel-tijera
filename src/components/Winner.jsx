import React from "react";

const Winner = ({ nombre, resultado }) => {
  return (
    <h2>
      {nombre}: <span className="winner">{resultado}</span>
    </h2>
  );
};

export default Winner;
