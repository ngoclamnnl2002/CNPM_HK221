import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserInfoPage from "./pages/UserInfoPage";
import MessagePage from "./pages/MessagePage";
import MyWorkPageCollector from "./pages/MyWorkPage/Collector"
import MyWorkPage from "./pages/MyWorkPage";
import ContentMessage from "./pages/ContentMessage";
import JanitorHomePage from "./pages/JanitorHomePage";
import JanitorDetailPage from "./pages/JanitorDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/trang-chu" element={<HomePage />}/>
      <Route path="/thong-tin-ca-nhan" element={<UserInfoPage />}/>
      <Route path="/tin-nhan" element={<MessagePage />}/>
      <Route path="/cong-viec" element={<MyWorkPageCollector />}/>
      <Route path="/tin-nhan/Nguyen-Thanh-Vin" element={<ContentMessage />}/>
      <Route path="/cong-viecs" element={<MyWorkPage />}/>
      <Route path="/janitor/trang-chu" element={<JanitorHomePage />}/>
      <Route path="/janitor/chi-tiet-cong-viec" element={<JanitorDetailPage />}/>
    </Routes>
  );
}

export default App;
