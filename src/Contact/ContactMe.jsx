import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-vanilla-tilt'
const ContactMe = ({ mailto, label }) => {
  return (
    <div className="centerit">
    <Tilt className="Tilt" options={{max:25,speed:400,glare:false,easing:"cubic-bezier(.03,.98,.52,.99)"}}>

        <Link className="theLink"
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
      </Link>
      </Tilt>
      </div>
    );
};

export default ContactMe;