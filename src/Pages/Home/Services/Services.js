import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'




const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div >
            <h2 className='services-title mt-5 mb-3' > Our Services:{services.length}</h2>
        <div className="container">
        <div className='services-container'>
          {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
          </div>
        </div>
        </div>
    );
};

export default Services;