import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderClass from "./components/HeaderClass";

function App() {
  const [count, setCount] = useState(0);
  const check = window.location.origin.indexOf("localhost") > -1;

  console.log(check);

  return (
    <>
      <HeaderClass />
      <Header />
    </>
  );
}

export default App;
