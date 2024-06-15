import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import  Banner  from './components/Banner';
import { Projects } from './components/Projects';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScrollTo = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <NavBar onScrollTo={handleScrollTo} />
            <div ref={homeRef} id="home">
              <Banner />
            </div>
            <div ref={experienceRef} id="experience">
              <Experience />
            </div>
            <div ref={projectsRef} id="projects">
              <Projects />
            </div>
          </div>
        } />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;