import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MessPage from "./pages/MessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/dang-nhap" element={<LoginPage />}/>
      <Route path="/tin-nhan" element={<MessPage />}/>
      <Route path="/tin-nhan" element={<MessPage />}/>
    </Routes>
  );
}

export default App;
