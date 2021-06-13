import React from "react";
import { Link } from "react-router-dom";
const ContactMe = ({ mailto, label }) => {
  return (
    <div style={{ marginTop:'100px'}}className="centerit">
      <div>
        <h1>Have questions?</h1>
        <h2>Reach out below!</h2>
</div>
        <Link className="theLink"
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
      </Link>

      </div>
    );
};

export default ContactMe;