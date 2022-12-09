import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserInfoPage from "./pages/UserInfoPage";
import MessagePage from "./pages/MessagePage";
import MyWorkPageCollector from "./pages/MyWorkPage/Collector"
import MyWorkPage from "./pages/MyWorkPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/dang-nhap" element={<LoginPage />}/>
      <Route path="/thong-tin-ca-nhan" element={<UserInfoPage />}/>
      <Route path="/tin-nhan" element={<MessagePage />}/>
      <Route path="/cong-viec" element={<MyWorkPageCollector />}/>
      <Route path="/cong-viecs" element={<MyWorkPage />}/>
    </Routes>
  );
}

export default App;
