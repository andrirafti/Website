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
  const p7=()=>{
    window.open('https://paradisetours.netlify.app/')
  }


  //this is what makes AOS fades SHOWING
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  return (
    <div style={{marginTop:'80px'}}className="card">
      {/* <header className="header3">Reccommended Project of the month: <hr></hr></header> */}
      {/* <div data-aos="fade-up" >
      <Tilt  options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
            <h1>Project 6</h1>
            <img style={{width: "80%"}} className="img" src="images/P6.jpg"/>
                    <p>React,Ruby-On-Rails,SQL</p>
                    <hr></hr>
        <button onClick={p6} >View Project 6</button>

        </Tilt>
      </div> */}
     
  
      
      
    
       
      <div className="card2">
      {/* <p>COVID Data</p>
          <h1>Project 1</h1>
          <img  className="img" src="images/P1.jpg"/>

        <p>Basic HTML/CSS/Vanilla JS</p>
        <button onClick={p1} >View Project 1</button>
        <hr></hr>
    
        
        <p>Workout Logger</p>
            <h1>Project 2</h1>
            <img  className="img" src="images/P2.jpg"/>

                    <p>React ,Air-Table </p>
        <button onClick={p2} >View Project 2</button>
                   <hr></hr>

      
                   <p>Anime Watch List</p>
            <h1>Project 3</h1>
            <img  className="img" src="images/P3.jpg"/>

        <p>React,Mongoose,Express</p>
        
        <button onClick={p3} >View Project 3</button>
                   <hr></hr>

                
        
                   <p>Trainers near you</p>
            <h1>Project 4</h1>
            <img  className="img" src="images/P4.jpg"/>

        
        <p>React,Ruby/Ruby-OnRails/SQL</p>
        <button onClick={p4} >View Project 4</button>
                  <hr></hr> */}

                
                  {/* <p>Netlix Replica</p>
            <h1>Project 5</h1>
            <img  className="img" src="images/P5.png"/>
                    <p>React,Ruby-On-Rails,SQL</p>
        <button onClick={p5} >View Project 5</button>
                   <hr></hr> */}

        
        <p>Paradise Resorts</p>
          
        <img className="img" src="/Web22.jpg" />
        <p style={{fontSize:'18px',}}>Designed a vacation-booking platform that enables users to book both an airline and hotel as part of the checkout process. Built a fully-functioning point of sale system, including the use of Local Storage. Utilized JavaScript/React for front-end development, and Ruby/Ruby on Rails for back-end development, as well as PostgreSQL.</p>
     
        <button onClick={p7} >View Project </button>
        <hr></hr>
                    <p>RainForest(E-commerece Amazon Clone) </p>
            
        <img className="img" src="images/P6.jpg" />
        <p style={{fontSize:'18px',}} >Produced an online shopping website which allows users to view different products, add and view product reviews, and sort by category upon sign-in to the platform. Once a user is signed in, they are presented with the option to add items to their cart and continue to a checkout process. Used JavaScript/React and Ruby/Ruby on Rails for back-end in the project’s development. </p>
      
        <button onClick={p6} >View Project </button>

        </div>
        </div>  
  
  )
}
