import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {

    const {id, name, img, description, price} =service
    const navigate = useNavigate()
   const handleNavigateToService= (id)=>{
    navigate(`/service/${id}`)
   
   } 

    return (
        <div className='service'>
            <img className='' src={img} alt="" />
            <h2>This is service: {name}</h2>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button onClick={()=> handleNavigateToService(id)} >Book Engine Diagnosis</button>
        </div>
    );
};

export default Service;