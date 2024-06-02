import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import  ContactForm  from "./components/ContactForm";
import  Experience  from "./components/Experience";  // Importuj komponent Experience
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
      <ContactForm/>
    </div>
  );
}

export default App;
