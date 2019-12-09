import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import './UserProfile.scss';

const UserProfile = () => {

    return ( 
        <Router>
            <div className="user-profile__container">
                <ProfileNavbar />
                <div className="user-profile__displayer">
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                </div>
            </div>
        </Router>
    );
}
export default UserProfile;
                