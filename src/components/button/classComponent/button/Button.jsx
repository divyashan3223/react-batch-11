import "./button.css";
import { useState } from "react";
const Button = ({ content }) => {
  const [data, setData] = useState(0);

  let handleClick = () => {
    setData((data) => data + 1);
    console.log(data);
  };
  return (
    <div className="container">
      <h1>count:{data}</h1>
      <button onClick={handleClick}>increment</button>
      <button onClick={handleClick}>decrement</button>
    </div>
  );
};

export default Button;
