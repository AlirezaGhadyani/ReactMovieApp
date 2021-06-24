import React from 'react';
import UnknownImage from "../../Assets/Images/UnknownMovie.jpg";
import WatchedCardOverlay from './WatchedCardOverlay';

const WatchedCard = ( { movie } ) => {
    return (
        <div className="watched-card">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`} className="watched-card-img" />
            ) : (
                <img src={UnknownImage} alt="poster for movies has no poster" className="watched-card-img" />
            )}

            <WatchedCardOverlay movie={movie} />
        </div>
    );
}

export default WatchedCard;