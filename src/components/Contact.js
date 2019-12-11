import React from 'react';
import Nav from './Nav';
import '../css/Contact.css';
import Footer from './Footer';






class Contact extends React.Component {

    state={
        submitted: false
    }

    handleSubmit = () => {
        this.setState({submitted: true})
    };

    show = () => {
        if(this.state.submitted === false){
            return(
                <form onSubmit={this.handleSubmit}>
                    <div className="flex-row">
                        <input className="two-inputs" type="text" placeholder="YOUR NAME" required></input>
                        <input className="two-inputs" type="email" placeholder="EMAIL" required></input>
                    </div>
    
                    <div className="flex-col">
                        <textarea className="comments-input" type="text" placeholder="COMMENTS.." rows="50" required></textarea>
                        <button className="submit" type="submit">OK, SEND IT</button>
                    </div>
                </form>
            );
        }
        
        else{
            return(
                <div className="flex-col success-col">
                    <span className="schedule-header">SUCCESS</span>
                    <img className="checkmark" src={require('../images/checkmark.png' )} alt="checkmark"></img>
                    <p>Your message has been sent! Once our team has received your message, we will be in touch shortly.</p>
                </div>
            );
        }

    };

    render(){
        return (
            <div className="Contact grid">
                <Nav color="black"></Nav>
                <div className="title">Contact Us</div>
                <div className="flex-col form-col">

                    <p>Send us a message and we will get back to you as soon as possible!</p>
                    
                    <div className="flex-col box">
                        {this.show()}
                    </div>
                </div>
                <Footer></Footer>
            </div>  
        );
    };
  
}

export default Contact;
