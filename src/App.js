import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import { Route } from 'react-router-dom';
import AboutMe from './About Me/AboutMe'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'


function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/"><AboutMe/>
      </Route>
      <Route exact path="/Projects"><Projects/></Route>
      <Route exact path="/Experience"><Experience/></Route>
    </div>
  );
}

export default App;
