import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';


const Home = () => {
    const [movies, setMovies] = useState([])
    const [watchTime, setWatchTime] = useState(0)
    const handleWatchTime = (time) => {
        const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"))
        if (previousWatchTime) {
            const sum = previousWatchTime + time
            localStorage.setItem("watchTime", sum)
            setWatchTime(sum)
        } else {
            localStorage.setItem("watchTime", time)
            setWatchTime(time)
        }
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
                <SideCart watchTime={watchTime}></SideCart>
            </div>
        </div>
    );
};

export default Home;