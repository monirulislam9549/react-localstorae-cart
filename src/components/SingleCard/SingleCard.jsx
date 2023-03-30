import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {
    console.log(props);
    const { poster, watchTime, movieName, description, imdbRating } = props.movie

    return (
        <div className='movie'>
            <img src={poster} alt="" />
            <div className='movie-info'>
                <h3>Movie Name: {movieName}</h3>
                <p>{description}</p>
                <div className='rating-time'>
                    <p>Rating: {imdbRating}</p>
                    <p>Watch Time: {watchTime} minute</p>
                </div>
            </div>
            <button>Book Now</button>
        </div>
    );
};

export default SingleCard;