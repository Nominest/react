import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import Header from "./component/Header";

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
function App() {
  let [count, setCount] = useState("");
  let item1;
  let item2;
  const changeToOne = () => {
    setCount(1);
  };
  const changeToTwo = () => {
    setCount(2);
  };
  const changeToThree = () => {
    setCount(3);
  };
  const changeToFour = () => {
    setCount(4);
  };
  const changeToFive = () => {
    setCount(5);
  };
  const changeToSix = () => {
    setCount(6);
  };
  const changeToSeven = () => {
    setCount(7);
  };
  const changeToEight = () => {
    setCount(8);
  };
  const changeToNine = () => {
    setCount(9);
  };
  const changeToZero = () => {
    setCount(0);
  };
  const Add = () => {
    let sum;
    sum = item1 + item2;
  };

  const inputChange = (e) => {
    item1 = e.target.value;
    item2 = e.target.value;
  };
  const equal = () => {};
  console.log(count);
  return (
    <div className="App">
      <input value={count} onChange={inputChange} />
      <button onClick={changeToOne}>1</button>
      <button onClick={changeToTwo}>2</button>
      <button onClick={changeToThree}>3</button>
      <button onClick={changeToFour}>4</button>
      <button onClick={changeToFive}>5</button>
      <button onClick={changeToSix}>6</button>
      <button onClick={changeToSeven}>7</button>
      <button onClick={changeToEight}>8</button>
      <button onClick={changeToNine}>9</button>
      <button onClick={changeToZero}>0</button>
      <button onClick={Add}>+</button>
      <button onClick={equal}>=</button>
    </div>
  );
}
export default App;
