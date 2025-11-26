import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/Leaderboard";
import Home from "./Pages/Home";
import GamePage from "./Pages/GamePage";
import AddQuestion from "./Pages/AddQuestion";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/scoreboard" element={<Leaderboard />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
