import React, { useEffect, useState } from "react";
import useFetch from "./Fetch";

const Customhook = () => {
  const [intro] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      {intro &&
        intro.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
    </div>
  );
};

export default Customhook;
