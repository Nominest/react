import WelcomePage from "./WelcomePage";

export default function Profile(prop) {
  const { setLogOut } = prop;

  return (
    <div>
      <p> Profile</p>
      <button onClick={() => setLogOut(false)}>Log out</button>
    </div>
  );
}
