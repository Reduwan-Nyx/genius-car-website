import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id,name, img, description, price} = service;
    const nevigate = useNavigate();
    const navigateToService = id =>{
            nevigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigateToService(id) } className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;