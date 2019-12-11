import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../css/About.css';

function About(props) {
  return (
      <div className="About grid">
            <Nav color="black"></Nav>

            <div className="title">About</div>

            <div className="left flex-col">
                <img className="about-image" src={require('../images/about.jpg')} alt="dogs"></img>
            </div>
            <div className="right flex-col">
                <p className="gray-word p-w">We use the power of the Internet to connect adopters with shelter pets and help pets go from alone to adopted. We're working to help the good people at shelters and rescue groups find homes for their pets. But we don't stop there. We also provide useful and informative information on the human/companion animal relationship to help keep pets healthy and permanently in their loving homes.</p>
            </div>
          <Footer></Footer>
    </div>
  );
}

export default About;
