import React, { useContext } from 'react';
import { FaEyeSlash, FaTimes } from 'react-icons/fa';
import { GlobalState } from '../../context/GlobalState';

const WatchedCardOverlay = ( { movie } ) => {

    const { deleteMovieFromWatched, moveMovieFromWatched } = useContext( GlobalState );

    return (
        <div className="card-overlay">
            <h3 className="overlay-name">{movie.title}</h3>
            <div>
                <button className="overlay-btn" onClick={() => moveMovieFromWatched( movie )}>
                    <FaEyeSlash />
                </button>
                <button className="overlay-btn" onClick={() => deleteMovieFromWatched( movie.id )}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}

export default WatchedCardOverlay;