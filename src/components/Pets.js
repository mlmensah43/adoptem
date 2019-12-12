import React from 'react';
import Nav from './Nav';
import Pet from './Pet';
import '../css/Pets.css';
import Footer from './Footer';
import data from '../data/data.json';

const pets = data.pets;

class Pets extends React.Component {
  state={
    dogs: false,
    cats: false,
    female: false,
    male: false
  }
  

  displayPets = (pet) =>{
    if(this.state.dogs === false && this.state.cats === false){
      if(this.state.female === false && this.state.male === false){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
      else if(this.state.female === true && pet.gender === 'f'){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
      else if(this.state.male === true && pet.gender === 'm'){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
    }

    else if(this.state.dogs === true && pet.type === 'dog'){
      if(this.state.female === false && this.state.male === false){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
      else if(this.state.female === true && pet.gender === 'f'){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
      else if(this.state.male === true && pet.gender === 'm'){
        return(
          <Pet name={pet.name}></Pet>
        );
      }

    }

    else if(this.state.cats === true && pet.type === 'cat'){
      if(this.state.female === false && this.state.male === false){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
      else if(this.state.female === true && pet.gender === 'f'){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
      else if(this.state.male === true && pet.gender === 'm'){
        return(
          <Pet name={pet.name}></Pet>
        );
      }
    }

  }

  toggleType = (type) =>{
    if(this.state.dogs === true && type === 'cat'){
      this.setState({dogs: !this.state.dogs})
      this.setState({cats: !this.state.cats})

    }
    else if(this.state.cats === true && type === 'dog'){
      this.setState({dogs: !this.state.dogs})
      this.setState({cats: !this.state.cats})
    }
    else if(type === 'dog'){
      this.setState({dogs: !this.state.dogs})
    }
    else if(type === 'cat'){
      this.setState({cats: !this.state.cats})
    }
  };

  toggleGender = (gender) =>{
    if(this.state.female === true && gender === 'm'){
      this.setState({female: !this.state.female})
      this.setState({male: !this.state.male})

    }
    else if(this.state.male === true && gender === 'f'){
      this.setState({female: !this.state.female})
      this.setState({male: !this.state.male})
    }
    else if(gender === 'f'){
      this.setState({female: !this.state.female})
    }
    else if(gender === 'm'){
      this.setState({male: !this.state.male})
    }
  };

  render(){
    return (
      <div className="Pets grid">
          <Nav color="black"></Nav>

          <div className="title">Available Pets</div>
          
          <div className="center"> 
            <p>Please feel free to contact us for inquires about any of our available pets.They also enjoy visits. Stop by and see us! Adoption fees for all pets are $95.</p>
          </div>
  
          <div className="center flex-row gray-row-2">
            <div>
                <button><img onClick={() => this.toggleType('dog')} className="icons" src={require(`../images/dog-icon-${this.state.dogs}.png`)} alt="dog"></img></button>
            </div>

            <div className="divider">
                <button><img onClick={() => this.toggleType('cat')} className="icons" src={require(`../images/cat-icon-${this.state.cats}.png`)} alt="cat"></img></button>
            </div>

            <div>
                <button><img onClick={() => this.toggleGender('f')} className="icons" src={require(`../images/female-icon-${this.state.female}.png`)} alt="female"></img></button>
            </div>

            <div>
                <button><img onClick={() => this.toggleGender('m')} className="icons" src={require(`../images/male-icon-${this.state.male}.png`)} alt="male"></img></button>
            </div>
          </div>
  
          <div className="center bottom">
              <div className="grid pets-grid">
              {pets.map(this.displayPets)} 
              </div>
          </div>

          <Footer></Footer>
          
          
      </div>
    );
  }
  
}

export default Pets;
