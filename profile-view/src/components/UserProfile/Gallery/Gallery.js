import React from 'react';
import './Gallery.scss'

const Gallery = (props) => {
    
    return ( 
        <div className="gallery-container">
            {props.passPictures}
        </div>
    );
}

export default Gallery;


 

