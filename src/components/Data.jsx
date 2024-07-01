import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";

// ! using if else method
// const Data = ({ isLoggin }) => {
//   let content;
//   if (isLoggin) {
//     content = <Signin />;
//   } else {
//     content = <Signup />;
//   }
//   return <div>{content}</div>;
// };
// export default Data;

// TODO using ternary operator
// const Data = ({ isLoggin }) => {
//   const content = isLoggin ? <Signin /> : <Signup />;
//   return <div>{content}</div>;
// };
// export default Data;

// ?using  && operator

const Data = ({ isLoggin }) => {
  const content = isLoggin && <Signin />;
  return <div>{content}</div>;
};
export default Data;
