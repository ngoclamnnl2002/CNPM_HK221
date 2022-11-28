import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MessagePage from "./pages/MessagePage"
import Test from "./pages/tests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />}/>
      <Route path="/dang-nhap" element={<LoginPage />}/>
      <Route path="/chat" element={<MessagePage />}/>
    </Routes>
  );
}

export default App;
