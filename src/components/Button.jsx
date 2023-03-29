import React from "react";

const Button = ({ handleOnClick, value }) => {
  return (
    <button onClick={handleOnClick} value={value}>
      {value}
    </button>
  );
};

export default Button;
