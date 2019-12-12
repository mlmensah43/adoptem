import React from 'react';
import {HashRouter as Router,Route} from "react-router-dom";
import Contact from './Contact';
import Favorites from './Favorites';
import Info from './Info';
import Landing from './Landing';
import Pets from './Pets';
import About from './About';
import NotFound from './NotFound';
import data from '../data/data.json';
import '../css/App.css';

const pets = data.pets;



function setPets(pet){
    return(
      <Route path={`/${pet.name}`} render={(props) => <Info {...props} id={pet.id} name={pet.name} age={pet.age} color={pet.color} breed={pet.breed} gender={pet.gender} bio={pet.bio} bg={pet.bg} />}
      />
    );
};

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/pets" exact component={Pets}></Route>
        <Route path="/favorites" exact component={Favorites}></Route>
        <Route path="/about" exact component={About}></Route>
        {pets.map(setPets)}
        {/* <Route component={NotFound}></Route>   */}
      </Router>
    </div>
  );
}

export default App;
