import React, { useEffect, useRef, useState } from "react";
import '../static/style/style.css'
import logo from '../static/LOGO.png'
import board from '../static/Board..png'
import discord from '../static/carbon_logo-discord.png'
import linkedin from '../static/carbon_logo-linkedin.svg'
import twitter from '../static/twitter.svg'
import github from '../static/github.svg'
import apple from '../static/apple 1.svg'
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const Login = (props) => {
  const [toggleSignup, setToggleSignup] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // const login = useGoogleLogin({
  //     onSuccess: (codeResponse) => setUser(codeResponse),
  //     onError: (error) => console.log('Login Failed:', error)
  // });
  const [credential, setCredential] = useState({ email: "", password: "", name: "", cpassword: "" })
  const onchange = (a) => {
    setCredential({ ...credential, [a.target.name]: a.target.value })
  }
  const handlelogin = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // addQuestion(question.title, question.description);

    const res = await fetch(`${process.env.REACT_APP_HOST_URI}/api/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });

    const result = await res.json();
    setIsLoading(false)
    if (result.success) {
      localStorage.setItem('token', result.authToken)
      props.setShowDashboard(true);
      // props.showAlert("Logged in successfully","success");
    }
    else {
      alert("Invalid Credentials");
      // props.showAlert("Invalid Credendials","danger");
    }
    setCredential({ email: "", password: "" });
  }
  const handlesignup = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // addQuestion(question.title, question.description);
    if (credential.password !== credential.cpassword) {
      setIsLoading(false)
      alert("Password and confirm password don't match")
    }
    else{

      const res = await fetch(`${process.env.REACT_APP_HOST_URI}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password })
      });
      
      const result = await res.json();
      setIsLoading(false)
      if (result.success) {
        localStorage.setItem('token', result.authToken)
        props.setShowDashboard(true);
        // props.showAlert("Logged in successfully","success");
      }
      else {
        alert("Invalid Credentials");
        // props.showAlert("Invalid Credendials","danger");
      }
    }
    setCredential({ email: "", password: "" });
  }
  const handleCallback = async (response) => {
    localStorage.setItem('user', response.credential);
    var userObject = jwtDecode(response.credential);

    const res = await fetch(`${process.env.REACT_APP_HOST_URI}/api/user`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email: userObject.email, name: userObject.name })
    });

    const result = await res.json();

    if (result.success) {
      localStorage.setItem('token', result.authToken)
      props.setShowDashboard(true);
      // props.showAlert("Logged in successfully","success");
    }
    else {
      alert(result.error);
      // props.showAlert("Invalid Credendials","danger");
    }
  }
  // log out function to log the user out of google and set the profile array to null


  // const [width, setWidth] = useState(window.innerWidth);
 
  // // console.log("width:"+width);
  // const size = width < 447 ? 'small' : 'medium';
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  },[])
  return (
    <div className="sign-in">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="board" alt="Board" src={board} />
            <img className="LOGO" alt="Logo" src={logo} />
            <div className="frame">
              <img className="vector" alt="Vector" src={twitter} />
              <img className="img" alt="Vector" src={github} />
              <img className="carbon-logo-linkedin" alt="Carbon logo linkedin" src={linkedin} />
              <img className="carbon-logo-discord" alt="Carbon logo discord" src={discord} />
            </div>
          </div>
          <div className="responsive">
            <div style={{ height: `${height + 50}px` }} className="login-form">
            <div  className="auth">
              <GoogleLogin
                    onSuccess={credentialResponse => {
                      handleCallback(credentialResponse);
                    }}
                    size='medium'
                    shape="pill"
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    className="google-btn"
                  />
                  <div className="apple-container">
                    <div className="apple-text">Sign in with Apple</div>
                    <img className="apple-logo" alt="Apple" src={apple} />
                  </div>
            </div>

              <div ref={ref} className="div">
                <ul className="form">
                  {toggleSignup && <li>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={onchange} name="name" value={credential.name} placeholder="john doe" />
                  </li>}

                  <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={onchange} placeholder="johndoe@gmai.com" name="email" id="email" value={credential.email} />
                  </li>

                  <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={onchange} placeholder="••••" name="password" id="password" value={credential.password} />
                  </li>

                  {toggleSignup && <li>
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" onChange={onchange} placeholder="••••" name="cpassword" id="cpassword" value={credential.cpassword} />
                  </li>}

                  <li>
                    {toggleSignup ? <button onClick={handlesignup} >
                      {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''}
                      Sign Up
                    </button>
                      :
                      <button onClick={handlelogin}>
                        {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''}
                        Sign In
                      </button>
                    }
                  </li>
                </ul>
              </div>
              <p className="logintoggle">
                <span className="span">{toggleSignup ? 'Already Registered?' : 'Don’t have an account?'} </span>
                <span style={{ cursor: "pointer" }} onClick={() => {
                  setToggleSignup(!toggleSignup)
                }} className="text-wrapper-7">{toggleSignup ? 'Login here' : 'Register here'} </span>
              </p>
            </div>
            <div className="login-header">
              {/* <div className="login-auth-button">
                <div className="google">

                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      handleCallback(credentialResponse);
                    }}
                    size={size}
                    shape="pill"
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    className="google"
                  />
                </div>

                
              </div> */}
              <div className="text-wrapper-10">{toggleSignup ? "Sign Up" : "Sign In"}</div>
              <p className="p">{toggleSignup ? "Sign Up" : "Sign In"} to your account</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
