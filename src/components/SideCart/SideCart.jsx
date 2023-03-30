import React, { useEffect, useState } from 'react';

const SideCart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime)
    useEffect(() => {
        const getWatchTimeFromStorage = localStorage.getItem("watchTime")
        setTime(getWatchTimeFromStorage);
    }, [watchTime])

    return (
        <div>
            <h1>My Cart</h1>

            <div>
                <p>total watch time</p>
                <input type="text" value={time} disabled />
            </div>

            <h5>Add Break time</h5>
            <button> 15 </button>
            <button>20</button>
            <button>25</button>
            <input type="text" value={0} disabled />
            <button>
                Complete
            </button>
        </div>
    );
};

export default SideCart;