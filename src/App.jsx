import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <NavBar />
            <Banner />
            <Experience />
            <Projects />
          </div>
        } />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;