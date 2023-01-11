import { useState } from "react";
import "../style/calculator.css";

export default function Calculator() {
  let [count, setCount] = useState("");
  const onClickHandler = (e) => {
    let btnValue;
    btnValue = e.target.innerText;
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(btnValue)
    ) {
      setCount(count + btnValue);
    } else if (btnValue === "C" && count !== "") {
      let tempResult = count.toString().slice(0, -1);
      setCount(tempResult);
    } else if (["/", "*", "+", "-"].includes(btnValue) && count !== "") {
      setCount(count + btnValue);
    } else if (btnValue === "=") {
      let tempres = eval(count);
      setCount(tempres);
    } else if (btnValue === "AC") {
      setCount("");
    }
  };
  const inputChange = (e) => {
    let btnValue;
    btnValue = e.target.innerText;
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="container">
        <input value={count} onChange={inputChange} />
        <button onClick={onClickHandler}>1</button>
        <button onClick={onClickHandler}>2</button>
        <button onClick={onClickHandler}>3</button>
        <button onClick={onClickHandler}>4</button>
        <button onClick={onClickHandler}>5</button>
        <button onClick={onClickHandler}>6</button>
        <button onClick={onClickHandler}>7</button>
        <button onClick={onClickHandler}>8</button>
        <button onClick={onClickHandler}>9</button>
        <button onClick={onClickHandler}>+</button>
        <button onClick={onClickHandler}>0</button>
        <button onClick={onClickHandler}>-</button>
        <button onClick={onClickHandler}>*</button>
        <button onClick={onClickHandler}>/</button>
        <button onClick={onClickHandler}>=</button>
        <button onClick={onClickHandler}>C</button>
        <button onClick={onClickHandler}>AC</button>
      </div>
    </div>
  );
}
