import "./App.css";

import UserPreferences from "./components/Userpreferences/UserPreferences";
import Login from "./components/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-preferences" element={<UserPreferences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
