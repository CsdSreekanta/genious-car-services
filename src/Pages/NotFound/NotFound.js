import React from 'react';
import sleepy from '.././../photos/sleepy.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>The Information not Found</h2>
            <img className='w-100' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;