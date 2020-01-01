import React from 'react';
import Nav from './Nav'
import '../css/Info.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';

class Info extends React.Component {

    state ={
        favorite: false
    }

    componentDidMount(){
        this.check(this.props.id, this.props.name);
    }

    check = (id, name) =>{
        if(sessionStorage.getItem(`${id}`) === name){
            this.setState({favorite: true})
        }
        else if(sessionStorage.getItem(`${id}`) === null){
            return;
        }
    }

    toggle = (id, name) =>{
        if(sessionStorage.getItem(`${id}`) === null){
            this.setState({favorite: true})
            sessionStorage.setItem(`${id}`,`${name}`);
        }
        else if(sessionStorage.getItem(`${id}`) === name){
            this.setState({favorite: false})
            sessionStorage.removeItem(`${id}`,`${name}`);
        }
    }

    noun = (gender) =>{
        if(gender === 'm'){
            return(
                <span>His</span>
            );
        }
        else if(gender === 'f'){
            return(
                <span>Her</span>
            );
        }
    }

    render(){
        return (
            <div className="Info grid">
        
                <Nav color="black"></Nav>

                <div className="title">{this.props.name}</div>
        
                <div className="image-col flex-col">
        
                    <div><img className="image" src={require(`../images/${this.props.name}-2.jpg`)} alt="pet"></img></div>
        
        
                    <div className="flex-row gray-row">
        
                        <div className="sub-info shadow flex-col">
                            <span>Sex</span>
                            <span className='gray-word cap'>{this.props.gender}</span>
                        </div>
        
                        <div className="sub-info shadow flex-col">
                            <span>Color</span>
                            <span className='gray-word'>{this.props.color}</span>
                        </div>
        
                        <div className="shadow flex-col">
                            <span>Age</span>
                            <span className='gray-word'>{this.props.age}</span>
                        </div>
                    </div>
        
                </div>
        
                <div className="description flex-col">
        
                    <div className="flex-col">
                        <span className={`black pet-name`}>About</span>
                        <span className="gray-word">{this.props.breed}</span>
                        <p className="gray-word p-w">{this.props.bio}</p>
                        <span className={`black pet-name`}>{this.noun(this.props.gender)} Story</span>
                        <p className="gray-word p-w">{this.props.bg}</p>
                        <div className="fav-row flex-row">
                            <button onClick={() => this.toggle(this.props.id, this.props.name)}><img className="heart" src={require(`../images/heart-${this.state.favorite}.png`)} alt='heart'></img></button>
                            <Link to="/contact" className="link-2 black">Ask About <span className="capitalize">{this.props.name}</span></Link>
                        </div>
                    </div>
        
                </div>
                <Footer></Footer>
            </div>
        );
    }
  
}

export default Info;
