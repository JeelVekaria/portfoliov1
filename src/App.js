import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { AboutMe } from './Components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutMe/>
    </div>
  );
}

export default App;
