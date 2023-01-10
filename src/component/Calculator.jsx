import { useState } from "react";
import "../style/calculator.css";

// function App() {
//   // let random = fetch("")
//   //   .then((res) => res.json())
//   //   .then((res) => console.log(res));
//   function clickHandler() {
//     console.log("clicked");
//   }

//   //
//   const name = "Nomin";
//   const title = <h1>Welcome {name}</h1>;
//   //
//   function welcome() {
//     return `Welcome to ${name}'s website`;
//   }
//   //
//   function greeting(name) {
//     if (name !== undefined) {
//       return <h1 style={customStyle}>Hello {name}!</h1>;
//     }
//     return <h1 style={customStyle}>Hello stranger!</h1>;
//   }
//   //if name contains legendary --> give style
//   let nameCust = "legendary stranger";
//   function greenName(nameCust) {
//     if (nameCust.split(" ")[0] === "legendary") {
//       return <p style={customStyle1}>Hello {nameCust}</p>;
//     }
//     return <p style={customStyle}>Hello {nameCust}</p>;
//   }
//   // style
//   const customStyle1 = {
//     color: "white",
//     fontSize: "50px",
//   };
//   const customStyle = {
//     color: "green",
//     fontSize: "20px",
//   };
//   //if name contains legendary --> give style ternary operator
//   let custName = "legend stranger";
//   const ternaryStyle = {
//     fontSize: custName.split(" ")[0] == "legend" ? "70px" : "20px",
//   };
//   return (
//     <div className="App">
//       <Header />
//       <div className="App-header">
//         {welcome()}
//         {title}
//         {greeting(name)}
//         {greenName(nameCust)}
//         {<p style={ternaryStyle}>Hello {custName}</p>}
//         <button onClick={clickHandler}>Click</button>
//       </div>
//     </div>
//   );
// }
//State
// function App() {
//   let [x, setX] = useState(100); //useState --> hook [x,setX] --> destructure which is let something = [10,()=> {console.log('testing)}] let [a,b] = something
//   //function
//   function decrement() {
//     console.log("x = ", x);
//     setX(x - 1);
//   }
//   function increment() {
//     setX(x + 1);
//   }
//   return (
//     <div className="App">
//       <button onClick={decrement}>-</button>
//       {x}
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }
//calculator
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
