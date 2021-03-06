import React from 'react';
import UnknownImage from "../../Assets/Images/UnknownMovie.jpg";
import WatchlistCardOverlay from './WatchlistCardOverlay';

const WatchListCard = ( { movie } ) => {
    return (
        <div className="watchlist-card">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`} className="watchlist-card-img" />
            ) : (
                <img src={UnknownImage} alt="poster for movies has no poster" className="watchlist-card-img" />
            )}

            <WatchlistCardOverlay movie={movie} />
        </div>
    );
};

export default WatchListCard;