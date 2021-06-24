import React, { useContext } from 'react';
import UnknownImage from "../../Assets/Images/UnknownMovie.jpg";
import { GlobalState } from '../../context/GlobalState';

const HomeMovieCard = ( { movie } ) => {
    //use cuntext
    const { addMovieToWatchlist, watchlist, addMovieToWatched, watched } = useContext( GlobalState );

    //find those movies has added to lists ones
    const watchlistExistMovie = watchlist.find( ( watchlistMovie ) => watchlistMovie.id === movie.id );
    const watchedExistMovie = watched.find( ( watchedMovie ) => watchedMovie.id === movie.id );

    return (
        <div className="movie-card">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`} className="movie-imgage" />
            ) : (
                <img src={UnknownImage} alt="poster for movies has no poster" className="movie-imgage" />
            )}
            <div className="movie-detail">
                <div className="movie-info">
                    <span className="movie-name">{movie.title}</span>
                    <span className="movie-date">{movie.release_date ? movie.release_date.substr( 0, 4 ) : '-'}</span>
                </div>
                <div className="movie-button">
                    <button
                        className={watchlistExistMovie ? 'btn-primary btn-active' : 'btn-primary'}
                        onClick={() => addMovieToWatchlist( movie )}
                        disabled={watchlistExistMovie || watchedExistMovie ? true : false}>
                        افزودن به لیست
                    </button>
                    <button
                        className={watchedExistMovie ? 'btn-primary btn-active' : 'btn-primary'}
                        onClick={() => addMovieToWatched( movie )}
                        disabled={watchedExistMovie || watchlistExistMovie ? true : false}>
                        دیده شده
                    </button>
                </div>
            </div>
        </div>
    );

}

export default HomeMovieCard;