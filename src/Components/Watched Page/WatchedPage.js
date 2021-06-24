import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState'
import WatchedCard from './WatchedCard'

const WatchedPage = () => {
    //useContext
    const { watched } = useContext( GlobalState );

    return (
        <div className="watched-card-wrapper">
            {watched.length > 0 ? watched.map( ( movie ) => (
                <WatchedCard movie={movie} key={movie.id} />
            ) ) : (
                <div className="watchlist-message">
                    <h2>فیلمی را تماشا نکرده اید!</h2>
                </div>
            )}
        </div>
    );
}

export default WatchedPage;