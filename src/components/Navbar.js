"use client";

import { googleLogout } from '@react-oauth/google';
import logo from '../static/LOGO.png'
import  '../static/style/navbar.css'

export default function Navbar(props) {
  function handleSignout(response)
  {
    // setuser({});
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    props.setShowDashboard(false);
    googleLogout();
    window.location.reload();
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
          Sign Out
        </button>
        </>
      )}
    </div>
  );
}
