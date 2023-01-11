import { useState } from "react";
import { Button } from "react-bootstrap";
export default function WelcomePage(prop) {
  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="userName"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={() => setLogin(userName, password)}>Log In</button>
      <button onClick={() => setLogin(userName, password)}>Sign Up</button>
      <p>Welcome</p>
    </div>
  );
}
