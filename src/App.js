import "./App.css";
import Button from "./components/button/classComponent/button/Button";

function App() {
  const handleClick = () => {
    alert("data was cancled");
  };
  const data = () => {
    alert("data was submitted+b");
  };
  return (
    <div className="App">
      <Button Click={handleClick} content={"cancel"} />
      <Button Click={data} content={"submited"} />
    </div>
  );
}

export default App;
