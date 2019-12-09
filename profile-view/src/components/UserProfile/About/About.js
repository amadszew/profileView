import React, { Component } from 'react';
import { connect } from 'react-redux'

class About extends Component {

    render() {
        return ( 
            <div>
                ABOUT
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profiles: state.profiles
    }
}

export default connect(mapStateToProps)(About)

 
