import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef= useRef('');
    const navigate = useNavigate();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleNavigate=()=>{
        navigate('/register')
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
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email"  placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      <p>New to genius car?  <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={handleNavigate}>Please Register</Link></p>
    </Form>
    
    </div>
  );
  
};

export default Login;
