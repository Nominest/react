import logo from "./logo.svg";
import "./App.css";

function App() {
  // let random = fetch("")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  function clickHandler() {
    console.log("clicked");
  }
  //
  const name = "Nomin";
  const title = <h1>Welcome {name}</h1>;
  //
  function welcome() {
    return `Welcome to ${name}'s website`;
  }
  //
  function greeting(name) {
    if (name !== undefined) {
      return <h1 style={customStyle}>Hello {name}!</h1>;
    }
    return <h1 style={customStyle}>Hello stranger!</h1>;
  }
  //if name contains legendary --> give style
  let nameCust = "legendary stranger";
  function greenName(nameCust) {
    if (nameCust.split(" ")[0] === "legendary") {
      return <p style={customStyle1}>Hello {nameCust}</p>;
    }
    return <p style={customStyle}>Hello {nameCust}</p>;
  }
  // style
  const customStyle1 = {
    color: "white",
    fontSize: "50px",
  };
  const customStyle = {
    color: "green",
    fontSize: "20px",
  };
  //if name contains legendary --> give style ternary operator
  let custName = "legend stranger";
  const ternaryStyle = {
    fontSize: custName.split(" ")[0] == "legend" ? "70px" : "20px",
  };
  return (
    <div className="App">
      <header className="App-header">
        {welcome()}
        {title}
        {greeting(name)}
        {greenName(nameCust)}
        {<p style={ternaryStyle}>Hello {custName}</p>}
        <button onClick={clickHandler}>Click</button>
      </header>
    </div>
  );
}

export default App;
