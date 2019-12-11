import React from 'react';
import { NavLink } from 'react-router-dom';
import sand from '../../../assets/sand-bg.jpg';
import avatar from '../../../assets/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileNavbar.scss';

export const ProfileNavbar = () => {
    return (
        <div className="profilenavbar-container">
            <img className="profilenavbar-background" src={sand} alt="sandy background" /> 
            <nav className="profilenavbar-nav">
                <div className="profilenavbar-nav__avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="profilenavbar-nav__buttons">
                    <NavLink className="button-nav" exact to='/'>
                        <FontAwesomeIcon
                            icon="user"
                            color="#fff"
                        />
                    </NavLink>
                    <NavLink className="button-nav" to='/gallery'>
                        <FontAwesomeIcon
                            icon="image"
                            color="#fff"
                        />
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default ProfileNavbar;