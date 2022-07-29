import { Routes, Route} from "react-router-dom";
import './App.css';
import LogIn from "./views/Login/Login.jsx";
import Home from "./views/Home.jsx";
import TakeOrder from "./views/TakeOrder.jsx";
import PrepareOrder from "./views/PrepareOrder.jsx";
import ServeOrder from "./views/ServeOrder.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="home" element={<Home />} />
        <Route path="take-order" element={<TakeOrder />} />
        <Route path="prepare-order" element={<PrepareOrder />} />
        <Route path="serve-order" element={<ServeOrder />} />
      </Routes>
    </div>
  );
}

export default App;
