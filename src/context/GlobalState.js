import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
    watchlist: localStorage.getItem( 'watchlist' ) ? JSON.parse( localStorage.getItem( 'watchlist' ) ) : [],
    watched: localStorage.getItem( 'watched' ) ? JSON.parse( localStorage.getItem( 'watched' ) ) : []
};

//initial movie reducer for do actions
const movieReducer = ( state, action ) => {
    switch ( action.type ) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };

        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched]
            };

        case "DELETE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter( ( movie ) => movie.id !== action.payload )
            };

        case "DELETE_MOVIE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter( ( movie ) => movie.id !== action.payload )
            };

        case "MOVE_MOVIE_FROM_WATCHLIST":
            return {
                watchlist: state.watchlist.filter( ( movie ) => movie !== action.payload ),
                watched: [action.payload, ...state.watched]
            };

        case "MOVE_MOVIE_FROM_WATCHED":
            return {
                watched: state.watched.filter( ( movie ) => movie !== action.payload ),
                watchlist: [action.payload, ...state.watchlist]
            };

        default: return state
    }
}

export const GlobalState = createContext( initialState );

export const GlobalProvider = ( props ) => {
    //useReducer
    const [state, dispatch] = useReducer( movieReducer, initialState );

    //make actions
    const addMovieToWatchlist = ( movie ) => {
        dispatch( { type: "ADD_MOVIE_TO_WATCHLIST", payload: movie } );
    }

    const addMovieToWatched = ( movie ) => {
        dispatch( { type: "ADD_MOVIE_TO_WATCHED", payload: movie } );
    }

    const deleteMovieFromWatchlist = ( id ) => {
        dispatch( { type: "DELETE_MOVIE_FROM_WATCHLIST", payload: id } );
    }

    const deleteMovieFromWatched = ( id ) => {
        dispatch( { type: "DELETE_MOVIE_FROM_WATCHED", payload: id } );
    }

    const moveMovieFromWatchlsit = ( movie ) => {
        dispatch( { type: "MOVE_MOVIE_FROM_WATCHLIST", payload: movie } );
    }

    const moveMovieFromWatched = ( movie ) => {
        dispatch( { type: "MOVE_MOVIE_FROM_WATCHED", payload: movie } );
    }

    //save locall storage
    useEffect( () => {
        localStorage.setItem( "watchlist", JSON.stringify( state.watchlist ) );
        localStorage.setItem( "watched", JSON.stringify( state.watched ) );
    }, [state] );

    return (
        <GlobalState.Provider value={{
            addMovieToWatchlist,
            watchlist: state.watchlist,
            addMovieToWatched,
            watched: state.watched,
            deleteMovieFromWatchlist,
            deleteMovieFromWatched,
            moveMovieFromWatchlsit,
            moveMovieFromWatched
        }}>
            {props.children}
        </GlobalState.Provider>
    );
}