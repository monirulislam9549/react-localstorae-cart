import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';


const Home = () => {
    const [movies, setMovies] = useState([])
    const handleWatchTime = (movie) => {
        console.log(movie);
    }
    useEffect(() => {
        const fetchData = async () => {
            const url = 'data.json';
            try {
                const res = await fetch(url)
                const data = await res.json()
                // console.log(data);
                setMovies(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <div className='movies-container'>
            <div className='movies-card'>
                {
                    movies.map(movie => <SingleCard
                        movie={movie}
                        key={movie.id}
                        handleWatchTime={handleWatchTime}
                    ></SingleCard>)
                }
            </div>
            <div className='cart-container'>
                Movie Cart
            </div>
        </div>
    );
};

export default Home;