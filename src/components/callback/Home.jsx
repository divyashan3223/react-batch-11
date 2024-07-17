import { useState, memo, useCallback } from "react";
const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClickCount1 = useCallback(() => {
    setCount1((count1) => count1 + 1);
  }, [count1]);
  const handleClickCount2 = useCallback(() => {
    setCount2((count2) => count2 + 1);
  }, [count2]);
  return (
    <div>
      <Heading />

      <Button click={handleClickCount1} data={count1} />

      <Button1 click={handleClickCount2} data={count2} />
    </div>
  );
};

export default Home;

export const Heading = memo(() => {
  console.log("heading component");
  return <div>Heading component</div>;
});

export const Button = memo(({ click, data }) => {
  console.log(`button  component one`);
  return (
    <div>
      <h2> count1::{data}</h2>
      <button onClick={click}>add a count</button>
    </div>
  );
});
export const Button1 = memo(({ click, data }) => {
  console.log(`button  component two`);
  return (
    <div>
      <h2> count2::{data}</h2>
      <button onClick={click}>add a count</button>
    </div>
  );
});
