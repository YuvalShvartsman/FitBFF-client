import "./App.css";

import UserPreferences from "./components/UserPreferences/UserPreferences";
import Login from "./components/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homapage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
