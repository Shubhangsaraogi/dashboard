import React from "react";
import '../static/style/style.css'
import logo from '../static/LOGO.png'
import board from '../static/Board..png'
import discord from '../static/carbon_logo-discord.png'
import linkedin from '../static/carbon_logo-linkedin.svg'
import twitter from '../static/twitter.svg'
import github from '../static/github.svg'
import google from '../static/google-icon 1.svg'
import apple from '../static/apple 1.svg'

const Login = () => {

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
            <div className="login-form">
              <div className="div">
                <div className="div-wrapper">
                  <input type="text" className="text-wrapper" placeholder="johndoe@gmail.com" />
                </div>
                <div className="overlap-2">
                  <div className="text-wrapper-2">••••••••</div>
                  <input type="password" className="text-wrapper-2" />
                </div>
                <div className="button-sign-in">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-3">Sign In</div>
                  </div>
                </div>
                <div className="text-wrapper-4">Email address</div>
                <div className="text-wrapper-5">Password</div>
                <div className="text-wrapper-6">Forgot password?</div>
              </div>
              <p className="don-t-have-an">
                <span className="span">Don’t have an account? </span>
                <span className="text-wrapper-7">Register here</span>
              </p>
            </div>
            <div id="loginDiv" className="google-sign-in">
            </div>
            <div className="apple-sign-in">
              <div className="overlap-3">
                <div className="text-wrapper-9">Sign in with Apple</div>
                <img className="apple" alt="Apple" src={apple} />
              </div>
            </div>
            <div className="text-wrapper-10">Sign In</div>
            <p className="p">Sign in to your account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
