import React, { Component } from 'react';
import UserProfile from './components/UserProfile/UserProfile'

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
