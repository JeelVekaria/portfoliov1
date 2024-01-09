import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { AboutMe } from './Components/AboutMe';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Experience } from './Components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      {/* <Experience/> */}
      <Projects/>
    </div>
  );
}

export default App;
