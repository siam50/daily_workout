import React, { useEffect, useState } from 'react';
import "./Activities.css";
const Activities = (props) => {
    const [breaktimes, setBreaktimes] = useState(0)
    const { carts } = props;
    let totalTime = 0;
    carts.forEach(cart => {
        totalTime = totalTime + cart.time;
    });

    const AddBreak = (e) => {
        setBreaktimes(e);
        localStorage.setItem('break-time', e);
    }

    useEffect(() => {
        const getLocalStore = localStorage.getItem('break-time');
        setBreaktimes(getLocalStore);

    }, [breaktimes])

    return (
        <div className='activity-container'>
            <div>
                <h3>Md. Siamur Rahman</h3>
                <p>Completed Bsc in CSE from Southeast University.</p>
                <p>Address: Dhaka Cantonment</p>
            </div>
            <div>
                <h3>Add a Break</h3>
                <div className='break-btn'>
                    <button onClick={(e) => AddBreak(e.target.innerText)}>10</button>
                    <button onClick={(e) => AddBreak(e.target.innerText)}>20</button>
                    <button onClick={(e) => AddBreak(e.target.innerText)}>30</button>
                    <button onClick={(e) => AddBreak(e.target.innerText)}>50</button>
                </div>
            </div>
            <div>
                <h3>Excercise Details</h3>
                <div className='excersice-time'>
                    <h3>Excersice Time</h3>
                    <p>{totalTime} Secounds</p>
                </div>
                <div className='break-time'>
                    <h3>Break Time</h3>
                    <p>{breaktimes} Secounds</p>
                </div>
                <div className='activity-btn'>
                    <button>Acrtivity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Activities;