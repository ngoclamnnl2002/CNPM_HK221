import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserInfoPage from "./pages/UserInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/dang-nhap" element={<LoginPage />}/>
      <Route path="/thong-tin-ca-nhan" element={<UserInfoPage />}/>
    </Routes>
  );
}

export default App;
