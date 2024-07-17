import React, { useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  let calculation = useMemo(() => {
    simpleCalculation(count);
  }, [count]);
  function increment() {
    setCount((precount) => precount + 1);
  }
  const addtodo = () => {
    setTodos((prevState) => [...prevState, "new todo"]);
  };
  return (
    <div>
      <h1>Add todods</h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addtodo}>add datas</button>
      <hr />
      <hr />
      <h1>count:{count}</h1>
      <button onClick={increment}>add count</button>
      <h1>simple calculation</h1>
      {calculation}
    </div>
  );
};
const expensiveCalculation = (num) => {
  console.log("Calculating.....");
  for (let i = 0; i < 100000; i++) {
    num += 1;
    return num;
  }
};
const simpleCalculation = (num) => {
  console.log("the singple function");
  for (let i = 0; i < 10; i++) {
    num += 1;
    return num;
  }
};
