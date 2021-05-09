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
                  <Tilt className="Tilt" options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>
      <img className="imgAndri"src="AndriPic.png"/>
                    
        <p>Tenacious,Ambitious,Over-Achieving is what you would often here my co-workers refer to me as.</p>
        <p>Every past role I always strived to not only be the best version of myself, but to always push myself to hit new limits. </p>
        <p>I got into Software Engineering the Summer of 2020.</p>
        <p>Over the course of the last year i have taken Udemy Courses, Self studied and graduated from GA Assemblys Immersive Program!</p>
        <p>There were many times i was challenged but i never let that deter to from always learning, the prospect of always being able to improve your skills in such a field truly excites me and I can not wait to see where my career takes me.</p>
      </Tilt>
      </div>
  )
}
