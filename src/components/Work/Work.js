import React from 'react';
import './Work.css';
const Work = (props) => {
    const { work, handler } = props;
    // console.log(handler)
    const { name, description, time, img } = work;
    return (
        <div className='work-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Time: {time}s</h4>
            <button onClick={() => handler(work)}>Add to List</button>
        </div>
    );
};

export default Work;