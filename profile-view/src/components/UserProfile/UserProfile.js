import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import './UserProfile.scss';

class UserProfile extends Component  {
    constructor() {
        super();
        this.state = {
            pictures: []
        };
    } 

    //Download gallery from Flickr for Gallery component
    componentDidMount() {
        fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1d3de119cec5023167d5b9218d0ac0ba&tags=NormaJeaneMortenson&per_page=9&page=1&format=json&nojsoncallback=1")
        .then(function(response) {
            return response.json();
        })
        .then(function(j) {
            let picArray = j.photos.photo.map((pic, index) => {
                const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                
                console.log(srcPath)
                return (
                     <div key={index} className="gallery-box">
                        <a href={srcPath} rel="noopener noreferrer" target="_blank" className="gallery-box__picture">
                            <img alt='marilyn' src={srcPath} />
                        </a>
                     </div>
                )
            })
            this.setState({pictures: picArray});
        }.bind(this))
    }

    render() {
        return ( 
            <Router>
                <div className="user-profile__container">
                    <ProfileNavbar />
                    <div className="user-profile__displayer">
                        <Route exact path="/">
                            <About />
                        </Route>
                        <Route path="/gallery"
                        render={(props) => <Gallery {...props}
                            passPictures={this.state.pictures} />}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}
export default UserProfile;
                