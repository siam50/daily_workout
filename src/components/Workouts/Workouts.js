import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Work from '../Work/Work';
import './Workouts.css';

const Workouts = () => {
    const [works, setWorks] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('workouts.json')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])
    const AddHandler = (work) => {
        const newCart = [...carts, work];
        setCarts(newCart);
    }
    return (
        <div className='workouts-container'>
            <div className='works-container'>
                {
                    works.map(work => <Work work={work} handler={AddHandler} key={work.id}></Work>)
                }
            </div>
            <div className='activities-container'>
                <Activities carts={carts}></Activities>
            </div>
        </div>
    );
};

export default Workouts;