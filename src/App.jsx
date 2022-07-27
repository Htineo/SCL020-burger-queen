import { Routes, Route} from "react-router-dom";
import './App.css';
import LogIn from "./views/LogIn.jsx";
import Home from "./views/Home.jsx";
import TakeOrder from "./views/TakeOrder.jsx";
import PrepareOrder from "./views/PrepareOrder.jsx";
import ServeOrder from "./views/ServeOrder.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="Home" element={<Home />} />
        <Route path="TakeOrder" element={<TakeOrder />} />
        <Route path="PrepareOrder" element={<PrepareOrder />} />
        <Route path="ServeOrder" element={<ServeOrder />} />
      </Routes>
    </div>
  );
}

export default App;
