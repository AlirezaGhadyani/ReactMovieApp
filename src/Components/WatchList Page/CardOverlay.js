import React from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';

const CardOverlay = ( { movie } ) => {
    return (
        <div className="card-overlay">
            <h3 className="overlay-name">{movie.title}</h3>
            <div>
                <button className="overlay-btn">
                    <FaEye />
                </button>
                <button className="overlay-btn">
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}

export default CardOverlay;