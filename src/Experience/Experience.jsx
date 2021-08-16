import Aos from "aos"
import "aos/dist/aos.css";
import Tilt from 'react-vanilla-tilt';
import { useEffect } from 'react'
import '../Experience/Experience.css'
export default function Experience() {
  //this is what makes AOS fades SHOWING
  useEffect(()=>{
    Aos.init({duration:2000});
//can use fadeleft, fade right,etc..
  }, [])
  //any image in public folder can be yeeted without import//
  return (
    <div  style={{marginTop:'100px'}}>
      <h1>Resume:</h1>
      <div >
        <img className="img" src="AndriResume2.JPG"/>
                    
        </div>
      
    
      </div>
  )
}
