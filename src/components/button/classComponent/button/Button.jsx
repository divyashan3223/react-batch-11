import "./button.css";
const Button = ({ Click, content }) => {
  return (
    <div className="container">
      <button onClick={Click}>{content}</button>
    </div>
  );
};

export default Button;
