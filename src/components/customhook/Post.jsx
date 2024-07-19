import React from "react";
import useFetch from "./Fetch";

const Post = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Post;
