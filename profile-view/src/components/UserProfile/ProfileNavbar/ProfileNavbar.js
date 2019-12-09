import React from 'react';
import { NavLink } from 'react-router-dom';
import sand from '../../../assets/sand-bg.png';
import avatar from '../../../assets/avatar.png';
import './ProfileNavbar.scss';

export const ProfileNavbar = () => {
    return (
        <div className="profile-navbar__container">
            <img className="profile-navbar__background" src={sand} alt="sandy background" /> 
            <nav className="profile-navbar__nav" >
                <img className="profile-navbar__avatar" src={avatar} alt="avatar" />
                <li>
                    <NavLink exact to={`/`}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to={`/gallery`}>
                        Gallery
                    </NavLink>
                </li>
            </nav>
        </div>
    );
}

export default ProfileNavbar;