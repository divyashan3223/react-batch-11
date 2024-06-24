import "./button.css";
export const Heading = () => {
  return <h1>heading tag</h1>;
};

//? inline another style

// const Button = () => {
//     const style={ backgroundColor: "blue", color: "white" }
//   return (
//     <div>
//       <Heading />
//       <button style={}>
//         submit
//       </button>
//     </div>
//   );
// };

// export default Button;

//! .external css
const Button = () => {
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div className="container">
      <Heading />
      <button>submit</button>
    </div>
  );
};

export default Button;
