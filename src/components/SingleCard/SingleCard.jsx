import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {
    const handleWatchTime = props.handleWatchTime;
    // console.log(props);
    const { poster, watchTime, movieName, description, imdbRating, price } = props.movie

    return (
        <div className='movie'>
            <img src={poster} alt="" />
            <div className='movie-info'>
                <h3>Movie Name: {movieName}</h3>
                <p>{description}</p>
                <div className='rating-time'>
                    <p>Rating: {imdbRating}</p>
                    <p>Watch Time: {watchTime} minute</p>
                    <p>Booking Price:{price}</p>
                </div>
            </div>
            <button onClick={() => handleWatchTime(watchTime)}>Book Now</button>
        </div>
    );
};

export default SingleCard;