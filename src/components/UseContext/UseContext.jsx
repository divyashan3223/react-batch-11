import React, { createContext, useContext } from "react";

const a = createContext();

const UseContext = () => {
  let name = "divi";
  let number = 10;
  return (
    <div>
      <a.Provider value={{ name, number }}>
        <One />
      </a.Provider>
    </div>
  );
};

export default UseContext;

export const One = () => {
  return (
    <div>
      <h1>One</h1>
      <Two />
    </div>
  );
};

export const Two = () => {
  const { name, number } = useContext(a);
  return (
    <div>
      <h1>Two</h1>
      <h2>
        {name}
        {number}
      </h2>
      <p>{number}</p>
      <Three />
    </div>
  );
};

export const Three = () => {
  const { number } = useContext(a);
  return (
    <div>
      <h1>Three</h1>
      {number}
    </div>
  );
};
