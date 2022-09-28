import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Workouts.css';

const Workouts = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('workouts.json')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])
    return (
        <div className='workouts-container'>
            <div className='works-container'>
                {
                    works.map(work => <Work work={work}></Work>)
                }
            </div>
            <div className='activities-container'><h2>activities</h2>
            </div>
        </div>
    );
};

export default Workouts;