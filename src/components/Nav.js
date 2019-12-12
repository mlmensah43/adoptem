import React from 'react';
import Sidebar from "react-sidebar";
import '../css/Nav.css';
import {Link} from 'react-router-dom';


class Nav extends React.Component {

    state = {
      sidebarOpen: false
    };

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }
    
  render(){
      return (
        <div className="Nav flex-row">
            <div><Link  to="/"><img className="logo" src={require(`../images/${this.props.color}-logo.svg`)} alt="menu-icon"></img></Link></div>
            <div><img className="adoptem" src={require(`../images/${this.props.color}-logo-2.svg`)} alt="adoptem"></img></div>
            <div>
              <div><Link to="/favorites"><img className="heart-icon" src={require(`../images/heart-false.png`)} alt="heart"></img></Link></div>
                {/* <div><Sidebar
                  pullRight={true}
                  sidebar={
                    <div className='flex-col menu'>
                      <span className="menu-links">Menu</span>
                      <a className="menu-links" href='#/pets'>Pets</a>
                      <a className="menu-links" href='#/about'>About</a>
                      <a className="menu-links" href='#/contact'>Contact</a>
                    </div>
                    
                  }
                  open={this.state.sidebarOpen}
                  onSetOpen={this.onSetSidebarOpen}
                  styles={{ sidebar: { background: "white" }, root: {position: undefined} }}>
                  <button onClick={() => this.onSetSidebarOpen(true)}><img className="menu-icon" src={require(`../images/${this.props.color}-menu-icon.png`)} alt="menu-icon"></img></button>
                </Sidebar></div> */}
            </div>
        </div>
      );
  }
}

export default Nav;
