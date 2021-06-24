import React, { useState } from 'react';
import HomeMovieCard from './HomeMovieCard';

const HomePage = () => {
    //input state
    const [inpValue, setInpValue] = useState( '' );
    //movies state
    const [movies, setMovies] = useState( [] );


    //get input value
    const getInputValue = ( value ) => {
        setInpValue( value )
        value && fetchMovies( value )
    }

    //fetch data
    const fetchMovies = async ( query ) => {
        try {
            const response = await fetch( `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false` );
            const data = await response.json();
            setMovies( data.results )
        } catch ( error ) {
            console.log( error );
        }
    }

    return (
        <>
            <div className="search-box-wrapper">
                <input
                    className="search-inp"
                    placeholder="نام فیلم را بنویسید"
                    onChange={e => getInputValue( e.target.value )}
                    value={inpValue}
                />
            </div>

            <div className="movie-card-wrapper">
                <div className="movie-number">
                    <h4>فیلم پیدا شده : <span>{movies.length === 0 ? 'جستجو نشده' : movies.length}</span></h4>
                </div>
                {movies && movies.map( ( movie ) => (
                    <HomeMovieCard movie={movie} key={movie.id} />
                ) )}
            </div>
        </>
    )
}

export default HomePage
