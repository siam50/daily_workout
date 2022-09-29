import React, { useEffect, useState } from 'react';
import "./Activities.css";
import Swal from 'sweetalert2';
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
    };

    useEffect(() => {
        const getLocalStore = localStorage.getItem('break-time');
        if (getLocalStore) {
            setBreaktimes(getLocalStore);
        }

    }, [breaktimes]);

    const Toast = () => {

        Swal.fire({
            text: 'Task Completed',
            target: '#custom-target',
            customClass: {
                container: 'position-absolute'
            },
            toast: true,
            position: 'bottom-right'
        })
    };

    return (
        <div className='activity-container'>
            <div>
                <h3>Information</h3>
                <p><strong>Name:</strong> Md. Siamur Rahman</p>
                <p><strong>Study:</strong> Completed Bsc in CSE from Southeast University.</p>
                <p><strong>Skills:</strong> Html, Css, Bootstrap, Tailwind, JavaScript, React</p>
                <p><strong>Hobbies:</strong> Coding, Travelling, gardening</p>
                <p><strong>Address:</strong> Manikdi Namapara, Dhaka Cantonment, Dhaka 1206</p>
            </div>
            <div>
                <h3>Add a Break</h3>
                <div className='break-btn'>
                    <button onClick={(e) => AddBreak(e.target.innerText)}><strong>10</strong></button>
                    <button onClick={(e) => AddBreak(e.target.innerText)}><strong>20</strong></button>
                    <button onClick={(e) => AddBreak(e.target.innerText)}><strong>30</strong></button>
                    <button onClick={(e) => AddBreak(e.target.innerText)}><strong>40</strong></button>
                </div>
            </div>
            <div className='excersice-details'>
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
                    <button onClick={Toast}>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Activities;