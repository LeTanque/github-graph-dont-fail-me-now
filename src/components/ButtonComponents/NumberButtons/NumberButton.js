import React from "react";

const NumberButton = props => {
  console.log("These are the props in NumberButton   \n", props)
  return (
    <>
      <div className="each-number">{props.eachNumber}</div>
    </>
  );
};

export default NumberButton;

