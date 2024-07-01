import "./button.css";
const Button = ({ content }) => {
  return (
    <div className="container">
      <button>{content}</button>
    </div>
  );
};

export default Button;
