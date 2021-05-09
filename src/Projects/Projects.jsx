import Aos from "aos"
import "aos/dist/aos.css";
import Tilt from 'react-vanilla-tilt'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function AboutMe() {


//p1 Link//
const p1 = () => {
  window.open('https://andrirafti.github.io/Covid-19-Project/#aboutCovid')
}
  
  //p2 Link //
  const p2 = () => {
    window.open('https://hardcore-brattain-2bd969.netlify.app')
  }
  //p3 Link //
  const p3 = () => {
    window.open('https://ima-miru.netlify.app')
  }
  //p4 Link//
  const p4 = () => {
    window.open('https://personal-training-gyms.netlify.app/')
  }
  const p5=()=>{
    window.open('https://andriflix.netlify.app')
  }


  //this is what makes AOS fades SHOWING
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  return (
    <div data-aos="fade-up" className="centerme">
      <div className="card">
    <h1 className="MyProject"> My Projects</h1>
                  <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
        <h1>Project 1</h1>
        <p>Basic HTML/CSS/Vanilla JS</p>
        <div>
          ___________________________________
        </div>
        <button onClick={p1} >View Project 1</button>
    
        </Tilt>
        <div data-aos="fade-up" className="centerme">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
                    <h1>Project 2</h1>
                    <p>REACT Front-End,Air-Table Backend</p>
                    <div>
          ___________________________________
                    </div>
        <button onClick={p2} >View Project 2</button>

      </Tilt>
        </div>
        <div data-aos="fade-up" className="centerme">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
                    <h1>Project 3</h1>
        <p>REACT Front-End</p>
        <p>BackEnd: Express,MongoDB</p>
                    <div>
          ___________________________________
                    </div>
        <button onClick={p3} >View Project 3</button>

                
          </Tilt>
        </div>
        <div data-aos="fade-up" className="centerme">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
                    <h1>Project 4</h1>
        <p>REACT Front-End</p>
        <p>RUBY/Ruby-OnRails/SQL BackEnd</p>
                    <div>
          ___________________________________
                    </div>
        <button onClick={p4} >View Project 4</button>

                
          </Tilt>
        </div>
        <div data-aos="fade-up" className="centerme">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
                    <h1>Project 5</h1>
                    <p>React,Ruby-On-Rails,SQL</p>
                    <div>
          ___________________________________
                    </div>
        <button onClick={p5} >View Project 5</button>

      </Tilt>
        </div>
        </div>
      </div>
  
  )
}
