import React, { useState } from 'react';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleNavigate= ()=>{
        navigate('/login')
    }
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        console.log('user', user)
        
    }
    const handleSubmit= async (event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

       
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName:name});
       console.log('Updated profile');
          navigate('/home')
      
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
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            {/* <label className={agree? 'ps-2 text-primary': 'ps-2 text-danger'} htmlFor="terms" >Genius car terms and condition</label> */}
            <label className={`ps-2 ${agree? '': 'text-danger'}`} htmlFor="terms" >Genius car terms and condition</label>
            <input
             disabled={!agree}
             className='btn btn-primary mx-auto d-block w-50 m-2' 
             type="submit" value="Register" />
           
            <p>Already have a account?  <Link to='/login' className="text-danger pe-auto text-decoration-none" onClick={handleNavigate}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </form>
    );
};

export default Register;