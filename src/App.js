import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
// import Leaderboard from './components/Leaderboard';

function App() {
  return (
      <div className="app-container">
        <Header />
        <Home />
        <About />
        {/* <Leaderboard/> */}
        <Footer />
      </div>
  );
}

export default App;
