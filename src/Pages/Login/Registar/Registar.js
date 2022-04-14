import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registar.css'
const Registar = () => {
    const nevigate = useNavigate()

    const nevigatelogin = () =>{
        nevigate('/login')
    }

    const handleRegistar = event =>{
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
    }

    return (
        <div className='registar-form'>
            <h2 className='text-center text-danger mt-5'>Please Registar</h2>
            <form onSubmit={handleRegistar}>
                <input type="text" name='name' placeholder='Your Name'/>
                <input type="email" name='email' id='' placeholder='Email address' required/>
                <input type="password" name='password' placeholder='Your Password' required/>
                <input type="submit" value="Registar" />
            </form>
            <p className='mt-3'>Alredy have an account? <Link to="/login" style={{cursor:'pointer'}} className='text-danger' onClick={nevigatelogin}>Please Login</Link></p>
        </div>
    );
};

export default Registar;