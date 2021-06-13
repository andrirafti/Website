import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../components/FontAwesome"
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel' 

export default function AboutMe({ mailto }) {
 
  //this is what makes AOS fades SHOWING
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  return (
   
    <div  data-aos="fade-up" >
      <div  >
        <h3 style={{ marginTop: '50px',textAlign:'center' }}>My Name is Andri Rafti I am a software Engineer based off NYC.
        Having graduated General Assemblys Immersive 12 week Bootcamp I have come out with a copious amount of knowledge for Computer Science and a newly ignited passion for coding.  </h3>
        <hr></hr>
       <h2> Upcoming Projects:</h2>
        <ul> <li>The Paradise Collection </li> </ul>
        
        <Carousel pause={null} cycle={true} >
        <Carousel.Item  >
          <img  style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    opacity: '1',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            height:'500px'}} src="Web1.jpg" />

   
  </Carousel.Item>
  <Carousel.Item  >
          <img  style={{backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    opacity: '1',
    visibility: 'inherit',
              zIndex: '20',
              backgroundRepeat: 'no-repeat',
            height:'500px'}} src="Web2.jpg" />

   
  </Carousel.Item>
</Carousel>



        <hr></hr>
        <h2 style={{textAlign:'center'}}>Skills</h2>
        <h3>Languages
         
          <ul>
          
            <li><FontAwesomeIcon icon=""/> JS  </li>
            <li>Ruby</li>
            <li>Express</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Postgresql</li>
            

          </ul>
        <h3>Frameworks
        <ul>
          
          <li> React </li>
              <li>RubyOnRails</li>
              <li>Mongoose</li>
        </ul>
        </h3>
        </h3>
        <hr></hr>
        
      </div>
        <img className="imgAndri"src="Andri.jpg"/>
     
      
      
  

             <p>Tenacious,Ambitious is what you would often hear my co-workers refer to me as.</p>
          
          
        <p>Every past role I always strived to not only be the best version of myself, but to also strive to learn new ways of completeing my objective more efficently and adequately. </p>
         
       
            <p>I became interested in the Software Engineering field the Summer of 2020.</p>
          
            <p>Over the course of the last year I have taken Udemy Courses, self studied and graduated from GA Assemblys Immersive BootCamp Program!</p>
          
            <p>There were many times I was challenged,however I never let that deter me from always learning the next new thing. The prospect of always being able to improve your skills in such a field truly excites me and I can not wait to see where my career takes me.</p> 
           
            <h3 style={{ marginTop: '20px',fontSize:'30px',textAlign:'center' }} >Need a Project Done?
        <Link 
            to='#' style={{textDecoration:'underline'}}
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            Contact Me
      </Link>
           
       </h3>
       
         
         
         
         
     
      </div>
      
  )
}
