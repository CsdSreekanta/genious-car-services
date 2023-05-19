import React from 'react';
import google from '../../../photos/google.png'
import facebook from '../../../photos/facebook.png'
import git from '../../../photos/git1.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import './SocialLogin.css'


const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error1) {
        errorElement=
            <p className='text-danger'>Error: {error?.message || error1?.message }</p>
          
        ;
    }
    if(loading || loading1){
        return <Loading></Loading>
    }
    if(user || user1 ){
        navigate('/home')
    }
 
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
            <p className='mt-3'>Or</p>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
        </div>
        <div className='social-button'>
            <button onClick={()=>signInWithGoogle()}
            className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{width:'30px', marginRight: '5px'}} src={google} alt="" />
               <span> Google Sign In </span>
            </button>
            {errorElement}
            <button 
            className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{width:'30px', marginRight: '5px'}} src={facebook} alt="" />
               <span> Facebook Sign In </span>
            </button>
            <button onClick={()=> signInWithGithub()}
            className='btn btn-primary w-50 d-block mx-auto'>
                <img style={{width:'30px', marginRight: '5px'}} src={git} alt="" />
               <span> Git Sign In </span>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;