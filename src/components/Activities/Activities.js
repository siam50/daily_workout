import React from 'react';
import "./Activities.css";
const Activities = (props) => {
    const { carts } = props;
    let totalTime = 0;
    carts.forEach(cart => {
        totalTime = totalTime + cart.time;
    });
    // console.log(times)
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
                    <button>10</button>
                    <button>20</button>
                    <button>30</button>
                    <button>50</button>
                </div>
            </div>
            <div>
                <h3>Excirsice Details</h3>
                <div>
                    <h3>Excirsice Time</h3>
                    <p>{totalTime}</p>
                </div>
            </div>
        </div>
    );
};

export default Activities;