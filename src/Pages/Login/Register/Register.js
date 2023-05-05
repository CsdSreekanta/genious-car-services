import React from 'react';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const handleNavigate= ()=>{
        navigate('/login')
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password)
    }


    return (
        <form className='form-container' onSubmit={handleSubmit} >
            <h3 style={{textAlign:'center', color: 'blue'  }}>Please Register</h3>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" id="" placeholder='Please Enter Your Name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" id="" placeholder='Please enter your email'/>
            <label htmlFor="">Your Password</label>
            <input type="password" name="password" id="" placeholder='Please enter your password'/>
            <input type="submit" value="Register" />
            <p>Already have a account?  <Link to='/login' className="text-danger pe-auto text-decoration-none" onClick={handleNavigate}>Please Login</Link></p>
        </form>
    );
};

export default Register;