import React from 'react';
import './Work.css';
const Work = (props) => {
    const { work } = props;
    console.log(work.img)
    return (
        <div className='work-card'>
            <img src={work.img} alt="" />
            <h3>{work.name}</h3>
        </div>
    );
};

export default Work;