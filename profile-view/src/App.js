import React, { Component } from 'react';
import UserProfile from './components/UserProfile/UserProfile';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faUser, faImage } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt, faUser, faImage);

export default class App extends Component {
    render() {
        return (
            <div>
                <main>
                    <UserProfile />
                </main>
            </div>
        );
    }
}
