import { useState } from "react";
import Output from "./Output";
import { useAppDispatch } from "../store/hooks";
import { setFilterOption } from "../store/slice";
import ResponsiveText from "./ResponsiveText";

export const Header = () => {
  const [test, setText] = useState(false);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    setText((prev) => !prev);
    dispatch(setFilterOption({ filterOption: test }));
    console.log("dispatched: setFilterOption REDUCER");
  };

  return (
    <div>
      <h1>Online Shopping</h1>
      {!test ? <p>Welcome!</p> : <Output>Logged Out</Output>}
      {test ? <ResponsiveText /> : null}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Header;
