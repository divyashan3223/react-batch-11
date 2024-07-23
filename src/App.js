import "./App.css";
import CrudOperations from "./components/Axios";
import Customhook from "./components/customhook/Customhook";
import CrudAxios from "./CrudAxios";
// import Post from "./components/customhook/Post";
// import Data from "./components/Data";

const App = () => {
  return (
    <div className="App">
      {/* <CrudOperations /> */}
      <CrudAxios />
    </div>
  );
};

export default App;
