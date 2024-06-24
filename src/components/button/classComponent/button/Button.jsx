export const Heading = () => {
  return <h1>heading tag</h1>;
};

const Button = () => {
  return (
    <div>
      <Heading />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        submit
      </button>
    </div>
  );
};

export default Button;
