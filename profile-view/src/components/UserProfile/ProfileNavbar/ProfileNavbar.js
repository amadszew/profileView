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
                <div className="profilenavbar-nav__switchers">
                    <NavLink exact to="/" className='button-nav'>
                        <FontAwesomeIcon
                            icon="user"
                            color="#fff"
                            size="lg"
                        />
                    </NavLink>
                    <NavLink exact to="/gallery" onClick={props.switchToFalse} className='button-nav'>
                        <FontAwesomeIcon
                            icon="image"
                            color="#fff"
                            size="lg"
                        />
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default ProfileNavbar;