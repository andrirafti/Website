import Aos from "aos"
import "aos/dist/aos.css";
import Tilt from 'react-vanilla-tilt'
import { useEffect } from 'react'

export default function AboutMe() {
 
  //this is what makes AOS fades SHOWING
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  },[])
  return (
   
    <div data-aos="fade-up" className="centerme">
      
      <h1>About Me</h1>
      <Tilt style={{"width":"800px"}}className="Tilt" options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
        <img style={{"width":"200px"}}className="imgAndri"src="Andri.jpg"/>
                    
        <hr></hr>
        <ul>
          <li>
            <h1>Tenacious,Ambitious,Over-Achieving is what you would often hear my co-workers refer to me as.</h1>
          </li>
          <li>
        <h2>Every past role I always strived to not only be the best version of myself, but to also strive to learn new ways of completeing my objective more efficently and adequately. </h2>
          </li>
          <li>
            <h2>I became interested in the Software Engineering field the Summer of 2020.</h2>
          </li>
          <li>
            <h3>Over the course of the last year I have taken Udemy Courses, self studied and graduated from GA Assemblys Immersive BootCamp Program!</h3>
          </li>
          <li>
            <h3>There were many times I was challenged,however I never let that deter me from always learning the next new thing. The prospect of always being able to improve your skills in such a field truly excites me and I can not wait to see where my career takes me.</h3>
            </li>
      </ul>
      </Tilt>
      </div>
      
  )
}
