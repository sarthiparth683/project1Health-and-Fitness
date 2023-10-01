import { useState } from "react";
import "./App.css";
import Nav from "./nav_component/Nav";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav></Nav>
    </>
  );
}

export default App;
