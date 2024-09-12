import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.tsx';
import About from './components/About/About.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
