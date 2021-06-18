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
  }, [])
  
  const p7=()=>{
    window.open('https://paradisetours.netlify.app/')
  }

 
  return (
   
    <div  data-aos="fade-up" >
      <div  >
        <h3 style={{ marginTop: '50px',textAlign:'center' }}>My name is Andri Rafti, I am a Software Engineer based in NYC.
        Having graduated General Assembly's Immersive 12 week Bootcamp, I have come out with a copious amount of knowledge for Computer Science and a newly ignited passion for coding.  </h3>
        <hr></hr>
        <h2> Upcoming Projects:</h2>
        <p>N/A</p>
        <hr></hr>
        <h2> Most Recent Project:</h2>
        <ul> <li>The Paradise Collection </li> </ul>
        <div className="theP">
        <p   style={{fontSize:'18px', padding:'10px'}}>The travel agency wanted customers to be able to easily book their vacations as one package including flights hotels and excursions.</p>
        <p  style={{fontSize:'18px',padding:'10px'}} >The customer finds it useful to be able to know the time for the flight and be able to compare ratings to aid their decisions while booking.</p>
        </div>
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
            height:'500px'}} src="Web11.jpg" />

   
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
            height:'500px'}} src="Web22.jpg" />

   
  </Carousel.Item>
</Carousel>


        <Link ><button onClick={p7} style={{ border: 'none', color:'blue',textDecoration:'underline',marginTop:'20px'}}>View Paradise Resorts</button></Link>
        <hr></hr>
        <div className="theUL" >
       
        <div className="theUL">
        <h3>Languages
         
          <ul>
          
            <li><FontAwesomeIcon icon=""/> JS  </li>
            <li>Ruby</li>
            <li>Express</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>PostgreSQL</li>
            

          </ul>
          </h3>
          </div>
        <h3>Frameworks
        <ul>
          
          <li> React </li>
              <li>Ruby on Rails</li>
              <li>Mongoose</li>
        </ul>
        </h3>
        </div>
        <hr></hr>
        
      </div>
        <img className="imgAndri"src="Andri.jpg"/>
     
      
      
  

             <h3 >Tenacious and ambitious is how you would hear my coworkers refer to me .
       
       
      I always strive to be the best version of myself and learn new ways of completeing my objective efficently and adequately. 
       
       </h3>
      <h3>
          I became interested in the Software Engineering field the Summer of 2020.
           
          Over the course of the last year I have taken Udemy Courses, self studied and graduated from General Assembly's Software Engineering Immersive Bootcamp Program!
           
          There were many times I had challenges to overcome, however, I never let that deter me from  learning the next new thing. The prospect of always being able to improve your skills in such a field truly excites me and I can not wait to see where my career takes me.
           </h3>
        
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
