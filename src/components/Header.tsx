import { useState } from "react";
import Output from "./Output";

export const Header = () => {
  const [test, setText] = useState(false);

  const handleClick = () => {
    setText((prev) => !prev);
  };
  return (
    <div>
      <h1>Online Shopping</h1>
      {!test ? <p>Welcome!</p> : <Output>Logged Out</Output>}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Header;
