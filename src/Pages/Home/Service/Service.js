import React from 'react';
import './Service.css'

const Service = ({service}) => {

    const {name, img, description, price} =service

    return (
        <div className='service'>
            <img className='' src={img} alt="" />
            <h2>This is service: {name}</h2>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button>Book Engine Diagnosis</button>
        </div>
    );
};

export default Service;