import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.scss'

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            pictures: []
        };
    }

    componentDidMount() {
        fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1d3de119cec5023167d5b9218d0ac0ba&tags=NormaJeaneMortenson&per_page=9&page=1&format=json&nojsoncallback=1")
        .then(function(response) {
            return response.json();
        })
        .then(function(j) {
            let picArray = j.photos.photo.map((pic, index) => {
                const srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                
                console.log(srcPath)
                return (
                     <div key={index} className="gallery-box">
                        <a href={srcPath} target="_blank" className="gallery-box__picture">
                            <img alt='marilyn' src={srcPath} />
                        </a>
                     </div>
                )
            })
            this.setState({pictures: picArray});
        }.bind(this))
    }
    
    render() {
        return ( 
            <div className="gallery-container">
                {this.state.pictures}
            </div>
        );
    }
}

export default Gallery;


 

