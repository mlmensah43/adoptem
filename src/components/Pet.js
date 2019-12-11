import React from 'react';
import '../css/Pet.css';


class Pet extends React.Component {


  render(){
    return (
      <div>
          <a href={`http://localhost:3000/#/${this.props.name}`}>
            <div className="container">
                <img className="pet-image" src={require(`../images/${this.props.name}.jpg`)} alt="pet"></img>
                <div className="overlay">
                  <div className="text-1">{this.props.name}</div>
                </div>
              </div>
          </a>
      </div>
      
    );
  }
  
}

export default Pet;
