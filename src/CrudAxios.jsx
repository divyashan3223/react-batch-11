import axios from "axios";
import React, { useEffect, useState } from "react";

const CrudAxios = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setState(res.data))
      .catch((error) => setError(error));
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {state.map((items, index) => (
        <h1 key={index}>{items.name}</h1>
      ))}
    </div>
  );
};

export default CrudAxios;
