import Aos from "aos"
import "aos/dist/aos.css";
import Tilt from 'react-vanilla-tilt'
import {useEffect} from 'react'
export default function AboutMe() {
  //this is what makes AOS fades SHOWING
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  return (
    <div data-aos="fade-up" className="centerme">
      <h1>About Me</h1>
                  <Tilt className="Tilt" options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
                    
      <h1>I am a dedicated software engineer!</h1>
    
      </Tilt>
      </div>
  )
}
