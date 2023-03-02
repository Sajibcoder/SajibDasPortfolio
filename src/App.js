import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Education from './components/Education';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className='app'>
<div className='mainpage'>
<Router>
<Navbar/>
    <Home/>
  <About/>
    <Skill/>
    <Education/>
     <Projects/>
    <Contact/>
   
   
  </Router>
  
</div>

    </div>
  )
}

export default App;
