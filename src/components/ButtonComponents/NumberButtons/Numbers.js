import React, { useState } from "react";
import { numbers } from "../../../data"
import NumberButton from "../NumberButtons/NumberButton";


const Numbers = () => {
  const [numbersArry, setNumbersArry] = useState(numbers);

  return (
    <>
      {numbersArry.map(eachNumber => (
        <NumberButton eachNumber={eachNumber} />
      ))}
    </>
  );
};

export default Numbers;