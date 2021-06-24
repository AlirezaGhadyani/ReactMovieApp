import React, { useContext } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import { GlobalState } from '../../context/GlobalState';

const WatchlistCardOverlay = ( { movie } ) => {

    const { deleteMovieFromWatchlist, moveMovieFromWatchlsit } = useContext( GlobalState );

    return (
        <div className="card-overlay">
            <h3 className="overlay-name">{movie.title}</h3>
            <div>
                <button className="overlay-btn" onClick={() => moveMovieFromWatchlsit( movie )}>
                    <FaEye />
                </button>
                <button className="overlay-btn" onClick={() => deleteMovieFromWatchlist( movie.id )}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}

export default WatchlistCardOverlay;