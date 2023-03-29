import React from "react";

const Player = ({ nombre, jugada }) => {
  return (
    <h2>
      {nombre}: {jugada}
    </h2>
  );
};

export default Player;
