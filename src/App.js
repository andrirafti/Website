import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav'
import { Route } from 'react-router-dom';
import AboutMe from './About Me/AboutMe'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import MyCert from './Certificate/MyCert'
import ContactMe from './Contact/ContactMe'



function App() {
  return (
    <div>
      
      <Nav  />
      <Route exact path="/"><AboutMe  label="Email Me" mailto="mailto:andrirafti@gmail.com" />
      </Route>
      <Route exact path="/Projects"><Projects/></Route>
      <Route exact path="/Experience"><Experience /></Route>
      {/* <Route exact path="/Certification"><MyCert /></Route> */}
      <Route exact path='/Contact'><ContactMe label="Email Me" mailto="mailto:andrirafti@gmail.com"  /></Route>
    </div>
     
  );
}

export default App;
