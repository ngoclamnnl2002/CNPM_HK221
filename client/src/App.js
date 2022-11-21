import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Test from "./pages/tests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />}/>
      <Route path="/dang-nhap" element={<LoginPage />}/>
    </Routes>
  );
}

export default App;
