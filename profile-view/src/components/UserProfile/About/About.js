import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.scss';

class About extends Component {

    render() {
        console.log(this.props)
        const { profiles } = this.props;
        const profileList = profiles.map((param, index) => {
            return (
                <div key={index}>
                    <header className="about-header">
                        <h1 className="about-header__name">{param.userName}</h1>
                        <div className="about-header__address"> 
                            <FontAwesomeIcon
                                icon="map-marker-alt"
                                color="#828282"
                            />
                            <p>
                                {param.city}, {param.country}
                            </p>
                        </div>
                    </header>
                    <div className="about-text">
                        <p className="about-text__first">{param.firstText}</p>
                        <blockquote className="about-text__quote">{param.quoteText}</blockquote>
                        <p className="about-text__second">{param.secondText}</p>
                    </div>
                </div>
            )
        })
        
        return ( 
            <section className="about-container">
                {profileList}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profiles
    }
}

export default connect(mapStateToProps)(About)

 
