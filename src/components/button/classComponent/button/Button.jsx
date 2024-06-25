import "./button.css";
export const Heading = () => {
  return <h1>props in react</h1>;
};

// TODO  using props key

//props
// const Button = (props) => {
//   return (
//     <div className="container">
//       <button>{props.content}</button>
//     </div>
//   );
// };

// export default Button;

// * props getting direct argument name

//props
// const Button = ({content}) => {
//   return (
//     <div className="container">
//       <button>{content}</button>
//     </div>
//   );
// };

// export default Button;

// ? background values applied directly and default props

// const Button = ({ content = "submit", bg, color }) => {
//   return (
//     <div className="container">
//       <button style={{ backgroundColor: `${bg}`,color:`${color}` }}>{content}</button>
//     </div>
//   );
// };

// export default Button;

// !background values stored a variable

const Button = ({ content = "submit", bg, color }) => {
  const data = {
    backgroundColor: bg,
    color: color,
  };
  return (
    <div className="container">
      <button style={data}>{content}</button>
    </div>
  );
};

export default Button;
