import React from 'react';
import '../css/Footer.css';

function Footer(props) {
  return (
    <div className="Footer flex-row">
        
        <span>Adoptem is not a real <br/> pet adoption entity.</span>
        <div className="flex-col">
          <img className="footer-logo" src={require('../images/white-logo-2.svg')} alt="logo"></img>
          <span>© Copyright 2019 adoptem.com</span>
        </div>
        <div className="flex-row">
            <img className="footer-icons" src={require(`../images/facebook.png`)} alt='facebook'></img>
            <img className="footer-icons" src={require(`../images/instagram.png`)} alt='instagram'></img>
            {/* <img className="yt-icon" src={require(`../images/youtube.png`)} alt='youtube'></img> */}
        </div>
    </div>
  );
}

export default Footer;
