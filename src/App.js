import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;