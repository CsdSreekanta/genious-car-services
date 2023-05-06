import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
   const {serviceId} = useParams()
   console.log(serviceId)
    
    return (
        <div className='text-center'>
            <h2>Welcome to Service Detail:{serviceId}</h2>
            <Link to= "/checkout" className='btn btn-primary'>CheckOut</Link>
        </div>
    );
};

export default ServiceDetail;