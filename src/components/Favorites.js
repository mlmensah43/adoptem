import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Pet from './Pet';
import '../css/Favorites.css';
import data from '../data/data.json';


const pets = data.pets;
function getFavorites(pet){
    if(sessionStorage.getItem(pet.id) === pet.name){
        return(
            <div className="pet-box">
                <Pet name={`${pet.name}`}></Pet>
            </div>
        )
    }
}

function Favorites(props) {
    return (
            <div className="Favorites grid">
                <Nav color="black"></Nav>

                <div className="title">Favorites</div>
                <div className="center">
                    <div className="grid pets-grid bottom">
                    {pets.map(getFavorites)} 
                    </div>
                </div>
                <Footer></Footer>
            </div>
        
  );
}

export default Favorites;
