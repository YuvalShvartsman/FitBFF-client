import "./App.css";

import UserPreferences from "./components/UserPreferences/UserPreferences";
import Login from "./components/Login/Login";
import HomePage from "./components/Homepage/Homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-preferences" element={<UserPreferences />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
