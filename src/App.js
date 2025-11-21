import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/Leaderboard";
import Home from "./Pages/Home";
import GamePage from "./Pages/GamePage";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
