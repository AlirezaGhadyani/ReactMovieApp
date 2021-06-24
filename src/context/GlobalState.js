import React, { createContext, useReducer } from 'react';

const initialState = {
    watchlist: [],
    watched: []
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

    return (
        <GlobalState.Provider value={{
            addMovieToWatchlist,
            watchlist: state.watchlist,
            addMovieToWatched,
            watched: state.watched
        }}>
            {props.children}
        </GlobalState.Provider>
    );
}