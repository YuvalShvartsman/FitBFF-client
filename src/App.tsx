import "./App.css";

import UserPreferences from "./components/UserPreferences/UserPreferences";
import Login from "./components/Login/Login";
import HomePage from "./components/Homepage/Homepage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/user-preferences" element={<UserPreferences />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="*" element={<Navigate to={"HomePage"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
