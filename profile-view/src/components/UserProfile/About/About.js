import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {

    render() {
        console.log(this.props)
        const { profiles } = this.props;
        const profileList = profiles.map((param, index) => {
            return (
                <div key={index}>
                    <header className="about__header">
                        <h1>{param.userName}</h1>
                        <div> 
                            <FontAwesomeIcon
                                icon="map-marker-alt"
                            />
                            <p>
                                {param.city}, {param.country}
                            </p>
                        </div>
                    </header>
                    <div className="about__text">
                        <p>{param.firstText}</p>
                        <blockquote>{param.quoteText}</blockquote>
                        <p>{param.secondText}</p>
                    </div>
                </div>
            )
        })
        
        return ( 
            <section className="about__container">
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

 
