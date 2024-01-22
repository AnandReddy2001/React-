import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loginsignup from "./Components/Loginsignup";
import Card from "./Components/Card";

function App() {
  return (
    <Routes>
      <Route path="" element={<Loginsignup />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
