import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef= useRef('');
    const navigate = useNavigate();
    

    let errorElement;
  
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
      errorElement= 
        <p className='text-danger'>Error: {error?.message}</p>
      ;
  }


    const handleNavigate=()=>{
        navigate('/register')
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
      auth
    );
      
 if(loading){
  return <Loading></Loading>
 }

    const handleResetPassword= async()=>{
      const email= emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email)
        toast('sent email')
      }
      else{
        toast ('Please enter your email address')
      }
    }
  
    if(user){
      navigate('/home')
    }
   
 

    const handleSubmit=(event)=>{
          event.preventDefault();
          const email= emailRef.current.value;
          const password = passwordRef.current.value;
          console.log(email, password)
          signInWithEmailAndPassword(email, password)
          
    }


  return (
    <div>
        <Form onSubmit={handleSubmit} className="container mt-5 w-50">
      <h2 className=" text-primary">Please Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control ref={emailRef} type="email"  placeholder="Enter email" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
  
        <Form.Control  ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
     
      <Button className="w-50 mx-auto d-block m-2" variant="primary" type="Login">
        Login
      </Button>
      {errorElement}
      <p>New to genius car?  <Link to='/register' className="text-primary pe-auto text-decoration-none" onClick={handleNavigate}>Please Register</Link></p>
      <p>Forget Password?  <button className="btn btn-link text-primary pe-auto text-decoration-none" onClick={handleResetPassword}>Reset Password</button></p>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </Form>
   
    </div>
    
  );
  
};

export default Login;
