import React from "react";
import { Link } from "react-router-dom";
const ContactMe = ({ mailto, label }) => {
  return (
    <div style={{ marginTop:'100px'}}className="centerit">
      <div>
        <h1>Have questions?</h1>
        
</div>
        <Link 
            to='#' style={{textDecoration:'underline'}}
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            Say Hi
      </Link>

      </div>
    );
};

export default ContactMe;