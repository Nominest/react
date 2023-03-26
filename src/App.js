import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import WelcomePage from "./component/welcomepage/WelcomePage";
import Profile from "./component/welcomepage/Profile";
const data = [
  {
    userName: "nomin",
    password: "nnnn",
  },
  {
    userName: "naraa",
    password: "aaaa",
  },
  {
    userName: "bataa",
    password: "bbbb",
  },
  {
    userName: "sukhee",
    password: "ssss",
  },
];
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(userName, password) {
    console.log("username:", userName);
    console.log("password:", password);
    if (userName == data.userName && password == data.password) {
      setIsLoggedIn(true);
    } else {
      console.error("wrong username or password");
    }
  }
  return (
    <div className="App">
      {isLoggedIn ? (
        <Profile setLogOut={setIsLoggedIn} />
      ) : (
        <WelcomePage setLogin={loginHandler} />
      )}
    </div>
  );
}
export default App;
