import loginstyle from '../styling/login.css';
import React, { useState } from 'react';
import Layout from './Layout1';



  
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [details, setdetails]   = useState({email:"" ,password:"" ,name:""});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // let navigate = useNavigate();

  const handleToggleForm = () => {

    setIsLoginForm(!isLoginForm);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (isLoginForm) {
        const response = await fetch('http://localhost:7000/auth/login/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: details.email, password: details.password })
        });
  
        const json = await response.json();
  
        if (json.success) {
          const token = json.jwtdata; // or json.accessToken, depending on your naming
      console.log('Token:', token);

      // Store the token in local storage
      localStorage.setItem('token', token);
          
          setIsLoggedIn(true); 
        } else {
          throw new Error("Invalid credentials");
        }
        setdetails({ email:"",password:"",name:""})
      } 
      else {
        const response = await fetch('http://localhost:7000/auth/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: details.email, password: details.password, name: details.name })
        });
  
        const json = await response.json();
  
        if (json.success) {
          const token = localStorage.getItem('token');
          console.log('Token:', token);

          console.log("Successful signup");
          
          
        } 
        else {
          throw new Error(json.error || "Signup failed");
        }
        setdetails({ email:"",password:"",name:""})
      }

    } catch (error) {
      console.error("Error:", error.message);
      // You can handle the error here, show a specific error message to the user, or log it for further investigation
      alert("An error occurred. Please try again.");
    }

   
  };
  
  const onChange = (e)=>{
    setdetails({...details,[e.target.name]: e.target.value})
}

  return (
    <>
      {isLoggedIn ? (
        <Layout />
      ) : (
        <div className={`loginpage ${isLoginForm ? '' : 'signup'}`}>
          <div className={`login-form ${isLoginForm ? '' : 'signup-form'}`}>
            <form onSubmit={handlesubmit}>
              <h2>{isLoginForm ? 'LOGIN' : 'SIGN UP'}</h2>
              <input className='loginput' type='text' name='email' placeholder='Your email' onChange={onChange}></input><br />
              <input className='loginput' type='password' name='password' placeholder='Your password' onChange={onChange}></input><br />
              {isLoginForm ? (
                <button type='submit'>Login</button>
              ) : (
                <>
                  <input className='loginput' type='text' name='name' placeholder='Your username' onChange={onChange}></input><br />
                  <button type='submit'>Sign Up</button>
                </>
              )}
              <p>{isLoginForm ? "Don't have an account???" : 'Already have an account?'}</p>
              <p onClick={handleToggleForm} style={{ cursor: 'pointer' }}>
                {isLoginForm ? 'Sign up!' : 'Login!'}
              </p>
              <a href="/"><i className="fab fa-instagram fa-xm" style={{ color: '#f75971' }}></i></a>
              <a href="/"><i className="fab fa-facebook fa-xm" style={{ color: '#2363d1' }}></i></a>
              <a href="/"><i className="fab fa-twitter fa-xm" style={{ color: '#0861fd' }}></i></a>
            </form>
          </div>

          <div className='logimg'>
            <img src={"./images/lognbg.png"} alt="Background" />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
