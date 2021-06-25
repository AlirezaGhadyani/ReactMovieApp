import React, { useState, useEffect } from 'react';
import HeadBg from '../HeadBg';
import HomeMovieCard from './HomeMovieCard';

const HomePage = () => {

    const fetchLatest = async () => {
        try {
            const response = await fetch( 'https://api.themoviedb.org/3/trending/movie/day?api_key=b3eed8b2480412d418e8776c212425e9' )
            const data = await response.json();
            setMovies( data.results );
        } catch ( error ) {
            console.log( error )
        }
    }

    useEffect( () => {
        fetchLatest()
    }, [] )

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
            <HeadBg />
            <div className="search-box-wrapper" id="serach-bar">
                <input
                    className="search-inp"
                    placeholder="نام فیلم را بنویسید"
                    onChange={e => getInputValue( e.target.value )}
                    value={inpValue}
                />
            </div>

            <div className="movie-card-wrapper">
                {movies && movies.map( ( movie ) => (
                    <HomeMovieCard movie={movie} key={movie.id} />
                ) )}
            </div>
        </>
    )
}

export default HomePage
