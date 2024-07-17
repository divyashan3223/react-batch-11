import "./App.css";
import Data from "./components/Data";
import ProductList from "./components/UseCallback";
import UseCallback from "./components/UseCallback";
import ParentComponent, { UseMemo } from "./components/UseMemo";
import Memo from "./components/UseMemo";
import Button from "./components/button/classComponent/button/Button";
import Home from "./components/callback/Home";

const App = () => {
  return (
    <div className="App">
   <Home/>
    </div>
  );
};

export default App;
