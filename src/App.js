import "./App.css";
import Data from "./components/Data";
import Button from "./components/button/classComponent/button/Button";

const App = () => {
  return (
    <div className="App">
      {/* <Button content={"submited"} /> */}
      <Data isLoggin={false} />
    </div>
  );
};

export default App;
