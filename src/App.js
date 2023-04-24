import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePageForm from "./components/HomePageForm/HomePageForm";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import BotNav from "./components/BotNav/BotNav";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import MyPageForm from "./components/MyPageForm/MyPageForm";
import NoticeForm from "./components/NoticeForm/NoticeForm";
import BestRecipeForm from "./components/BestRecipeForm/BestRecipeForm";
import AIForm from "./components/AIForm/AIForm";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/ai" element={<AIForm />} />
        <Route path="/best" element={<BestRecipeForm />} />
        <Route path="/notice" element={<NoticeForm />} />
        <Route path="/mypage" element={<MyPageForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<HomePageForm />} />
      </Routes>
      <BotNav />
    </Router>
  );
}

export default App;
