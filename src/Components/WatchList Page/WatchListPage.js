import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState'
import WatchListCard from './WatchListCard'

const WatchListPage = () => {
    //useContext
    const { watchlist } = useContext( GlobalState );
    console.log( watchlist )

    return (
        <div className="watchlist-card-wrapper">
            {watchlist.length > 0 ? watchlist.map( ( movie ) => (
                <WatchListCard movie={movie} />
            ) ) : (
                <div className="watchlist-message">
                    <h2>فیلمی برای تماشا اضافه نکردید!</h2>
                </div>
            )}
        </div>
    );
}

export default WatchListPage;