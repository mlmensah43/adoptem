import React from 'react';
import '../css/Pet.css';
import {Link} from 'react-router-dom';


class Pet extends React.Component {


  render(){
    return (
      <div>
          <Link to={`/${this.props.name}`}>
            <div className="container">
                <img className="pet-image" src={require(`../images/${this.props.name}.jpg`)} alt="pet"></img>
                <div className="overlay">
                  <div className="text-1">{this.props.name}</div>
                </div>
            </div>
          </Link>
      </div>
      
    );
  }
  
}

export default Pet;
