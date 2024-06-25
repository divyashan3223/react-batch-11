import "./App.css";
import Button from "./components/button/classComponent/button/Button";

function App() {
  return (
    <div className="App">
      <Button content={"Click"} bg={"red"} />
      <Button content={"download"} bg={"yellow"} />
      <Button content={"cancel"} color={"white"} />
      <Button />
    </div>
  );
}

export default App;
