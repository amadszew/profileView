import React from 'react';
import { NavLink } from 'react-router-dom';
import sand from '../../../assets/sand-bg.jpg';
import avatar from '../../../assets/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileNavbar.scss';

export const ProfileNavbar = (props) => {
    return (
        <div className="profilenavbar-container">
            <img className="profilenavbar-background" src={sand} alt="sandy background" /> 
            <nav className="profilenavbar-nav">
                <img className="profilenavbar-nav__avatar" src={avatar} alt="avatar" />
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