"use client";

import { googleLogout } from '@react-oauth/google';
import logo from '../static/LOGO.png'
import  '../static/style/navbar.css'
import { useState } from 'react';

export default function Navbar(props) {
  const [isLoading, setIsLoading] = useState(false)

  function handleSignout(response)
  {
    // setuser({});
    setIsLoading(true)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.setShowDashboard(false);
    googleLogout();
    window.location.reload();
    setIsLoading(false)
    // document.getElementById('loginDiv').hidden=false;
  }
  const token=localStorage.getItem('token');
  return (
    <div className="bg-gray-700	p-4 flex justify-between items-center shadow-md navbar">
      <a className="font-bold text-lg text-blue-700 logo" href='#'>
        <img src={logo} alt="logo" />
      </a>
      {token && (
        <>
        <button onClick={props.showMenu} className='hamburger'>
          <div className="line"></div>
          <div className="line separate"></div>
          <div className="line"></div>
        </button>
        <button
          onClick={handleSignout}
          
          className="border-box bg-slate-900 text-white px-6 py-2 rounded-md signout"
        >
          {isLoading?<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:''}
          Sign Out
        </button>
        </>
      )}
    </div>
  );
}
