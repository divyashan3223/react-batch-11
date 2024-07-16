import { useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const data = useMemo(() => {
    expensiveCalculation(count);
  }, [count]);
  const handletodo = () => {
    setTodo((prevState) => [...prevState, "divi"]);
  };
  const handleIncrement = () => {
    setCount((precount) => precount + 1);
  };
  return (
    <div>
      <h1>add yourname</h1>
      {todo.map((a, index) => {
        return <p key={index}>{a}</p>;
      })}
      <button onClick={handletodo}>add name</button>
      <hr />
      <hr />
      <h1>counting values:</h1>
      <p>count:{count}</p>
      <button onClick={handleIncrement}>+</button>
      <hr />
      <h1>expensiveCalculation </h1>
      {data}
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("calculating");
  for (let i = 0; i < 10000000000; i++) {
    num += 1;
  }
  return num;
};
const simpleCalculation = (num) => {
  console.log("simple one");
  for (let i = 0; i < 10; i++) {
    num += 1;
  }
  return num;
};
