import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Home from './components/Home/Home';

// Router
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
