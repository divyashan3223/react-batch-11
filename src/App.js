import "./App.css";
import Data from "./components/Data";
import ProductList from "./components/UseCallback";
import UseCallback from "./components/UseCallback";
import ParentComponent, { UseMemo } from "./components/UseMemo";
import Memo from "./components/UseMemo";
import Button from "./components/button/classComponent/button/Button";

const App = () => {
  return (
    <div className="App">
      <UseMemo />
    </div>
  );
};

export default App;
