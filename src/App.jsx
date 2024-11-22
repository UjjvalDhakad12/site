import { React } from 'react'
import './App.css'
import Nav from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Certificates from './Certificates';

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Contact />} />
          <Route path="/certificats" element={<Certificates />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
