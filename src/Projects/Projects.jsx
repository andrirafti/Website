import Aos from "aos"
import "aos/dist/aos.css";
import Tilt from 'react-vanilla-tilt'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Projects.css'
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
  const p6=()=>{
    window.open('https://rainforest-amazon.netlify.app/')
  }


  //this is what makes AOS fades SHOWING
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  return (
    <div style={{marginTop:'200px'}} data-aos="fade-up" className="card">
      <header className="header3">Reccommended Project of the month: <hr></hr></header>
      <div data-aos="fade-up" className="card">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
            <h1  >Project 6</h1>
            <img style={{width: "80%"}} className="img" src="images/P6.jpg"/>
                    <p>React,Ruby-On-Rails,SQL</p>
                    <div>
          ___________________________________
                    </div>
        <button onClick={p6} >View Project 6</button>

        </Tilt>
      </div>
     
  
      
      <div className="card">
    
                  <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
       
                    
          <h1>Project 1</h1>
          <img style={{width: "80%"}} className="img" src="images/P1.jpg"/>

        <p>Basic HTML/CSS/Vanilla JS</p>
        <hr></hr>
        <button onClick={p1} >View Project 1</button>
    
        </Tilt>
        <div data-aos="fade-up" className="card">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
            <h1>Project 2</h1>
            <img style={{width: "80%"}} className="img" src="images/P2.jpg"/>

                    <p>React ,Air-Table </p>
                   <hr></hr>
        <button onClick={p2} >View Project 2</button>

      </Tilt>
        </div>
        <div data-aos="fade-up" className="card">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
            <h1>Project 3</h1>
            <img style={{width: "80%"}} className="img" src="images/P3.jpg"/>

        <p>React,Mongoose,Express</p>
        
                   <hr></hr>
        <button onClick={p3} >View Project 3</button>

                
          </Tilt>
        </div>
        <div data-aos="fade-up" className="card">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
            <h1>Project 4</h1>
            <img style={{width: "80%"}} className="img" src="images/P4.jpg"/>

        
        <p>React,Ruby/Ruby-OnRails/SQL</p>
                  <hr></hr>
        <button onClick={p4} >View Project 4</button>

                
          </Tilt>
        </div>
        <div data-aos="fade-up" className="card">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
            <h1>Project 5</h1>
            <img style={{width: "80%"}} className="img" src="images/P5.png"/>
                    <p>React,Ruby-On-Rails,SQL</p>
                   <hr></hr>
        <button onClick={p5} >View Project 5</button>

      </Tilt>
        </div>
        <div data-aos="fade-up" className="card">
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
            <h1>Project 6</h1>
            <img style={{width: "80%"}} className="img" src="images/P6.jpg"/>
                    <p>React,Ruby-On-Rails,SQL</p>
                   <hr></hr>
        <button onClick={p6} >View Project 6</button>

      </Tilt>
        </div>
        </div>
      </div>
  
  )
}
