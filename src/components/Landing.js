import React from 'react';
import Nav from './Nav'
import {Link} from 'react-router-dom';
import '../css/Landing.css';

function Landing() {
  return (
    <div className="Landing grid">

        <Nav color="white"></Nav>

        <div className="paragraph">
            <div className="header">The best breeds are the ones in need.</div>
            <p>Adopting an abandoned animal is one of the best ways to change a life. Help change a life today and adopt.</p>
            <Link to="/pets"><div className="link">Find a pet</div></Link>
        </div>
        
    </div>
  );
}

export default Landing;
