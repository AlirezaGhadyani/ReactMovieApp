import React from 'react';
import UnknownImage from "../../Assets/Images/UnknownMovie.jpg";

const HomeMovieCard = ( { movie } ) => {

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
                    <button className="btn-primary">افزودن به لیست</button>
                    <button className="btn-primary">دیده شد</button>
                </div>
            </div>
        </div>
    );

}

export default HomeMovieCard;