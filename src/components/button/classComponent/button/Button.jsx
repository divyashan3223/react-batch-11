import "./button.css";
import { useEffect, useState } from "react";
const Button = () => {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);
  useEffect(() => {   
    console.log("data is working in backend");
  }, [data1]);
  let handleClick = () => {
    setData((data) => data + 1);

    console.log(data);
  };
  let handleClick1 = () => {
    setData1((data1) => data1 + 1);
  };
  let decrement = () => {
    setData((data) => data - 1);

    console.log(data);
  };
  let decrement1 = () => {
    setData1((data1) => data1 - 1);
  };

  return (
    <div className="container">
      <h1>count:{data}</h1>
      <h1>count1:{data1}</h1>
      <button onClick={handleClick}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={handleClick1}>increment</button>
      <button onClick={decrement1}>decrement</button>
    </div>
  );
};

export default Button;
