"use client"
import React, { useState } from "react";
import '../static/style/dashboard.css'
import '../static/style/profile.css'
import Navigation from "./Navigation";
import MaskGroup from "./MaskGroup";
import like from '../static/like_icon.svg'
import totalUser from '../static/total_user_icon.svg'
import bell_icon from '../static/bell_icon.svg'
import total_transaction from '../static/total_transaction.svg'
import revenue_icon from '../static/revenue_icon.svg'
import whatsapp from '../static/whatsapp.svg'
import youtube from '../static/youtube.svg'
import instagram from '../static/instagram.svg'
import mail from '../static/mail.svg'
import Addprofile from "./Addprofile";
import jwtDecode from "jwt-decode";
import Chart from "./Chart.js";
import Piechart from "./Piechart";

const Dashboard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [profileInput, setprofileInput] = useState({ name: "", email: "", phone: "", instagram: "", youtube: "" })

  const [showprofile, setShowprofile] = useState(false)
  function handleShow() {
    setShowModal(!showModal);
  }
  const usertoken = localStorage.getItem('user');
  if (usertoken)
    var userObject = jwtDecode(usertoken);


  const fetchprofile = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST_URI}/api/getprofile`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const result = await response.json();
    console.log("result:" + result);
    if (result.success) {
      setShowprofile(true);
      profileInput.email = result.profile.email;
      profileInput.name = result.profile.name;
      profileInput.phone = result.profile.phone;
      profileInput.instagram = result.profile.instagram;
      profileInput.youtube = result.profile.youtube;
    }
    else {
      setShowprofile(false);
    }
    return result;
  }



  const profiledata = fetchprofile();
  console.log("getprofile:")
  console.log(profiledata);
  return (
    <div className={`dashboard`}>
      <div className={`div-2 ${showModal && 'dashboard-blur'}`}>
        <Navigation openmenu={props.openmenu} className="navigation-instance" />
        <div className="overlap">
          <div className="frame-container">
            
          <div className="frame">
            <div className="frame-2">
              <div className="overlap-group">
                <img className="vector" alt="Vector" src={revenue_icon} />
              </div>
            </div>
            <div className="frame-2">
              <div className="vector-wrapper">
                <img className="img" alt="Vector" src={total_transaction} />
              </div>
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-8">Total Transactions</div>
                  <div className="text-wrapper-9">1,520</div>
                </div>
                <div className="label">
                  <div className="label-text">+1.7%</div>
                </div>
              </div>
            </div>
            <div className="frame-2">
              <div className="img-wrapper">
                <img className="vector-2" alt="Vector" src={like} />
              </div>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="text-wrapper-8">Total Likes</div>
                  <div className="text-wrapper-10">9,721</div>
                </div>
                <div className="label">
                  <div className="label-text-2">+1.4%</div>
                </div>
              </div>
            </div>
            <div className="frame-6">
              <div className="overlap-2">
                <img className="vector-3" alt="Vector" src={totalUser} />
              </div>
              <div className="frame-5">
                <div className="frame-4">
                  <div className="text-wrapper-8">Total Users</div>
                  <div className="text-wrapper-10">9,721</div>
                </div>
                <div className="label">
                  <div className="label-text-2">+4.2%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-4">
              <div className="text-wrapper-8">Total Revenues</div>
              <div className="text-wrapper-9">$2,129,430</div>
            </div>
            <div className="label">
              <div className="label-text-2">+2.5%</div>
            </div>
          </div>
          </div>

          <Chart />
        </div>
        <div className="overlap-4">
          <div className="top-products-card">
            <div className="overlap-5">
              <div className="card-wrapper">
                <div className="div-3" />
              </div>
              <Piechart />

            </div>
          </div>
          {/* <div className="overlap-wrapper">
            <div className="overlap-6">
              <div className="donut-chart-wrapper">
                <div className="donut-chart">
                  <div className="overlap-group-2">
                    <img className="donut" alt="Donut" src="https://c.animaapp.com/oPSv45bI/img/donut-3.svg" />
                    <img className="donut-2" alt="Donut" src="https://c.animaapp.com/oPSv45bI/img/donut-1-2.svg" />
                    <img className="donut-3" alt="Donut" src="https://c.animaapp.com/oPSv45bI/img/donut-2.svg" />
                  </div>
                </div>
              </div>
              <img className="donut-4" alt="Donut" src="https://c.animaapp.com/oPSv45bI/img/donut-1-1.svg" />
              <img className="donut-5" alt="Donut" src="https://c.animaapp.com/oPSv45bI/img/donut-1.svg" />
              <img className="ellipse-6" alt="Ellipse" src="https://c.animaapp.com/oPSv45bI/img/ellipse-4.svg" />
            </div>
          </div> */}
        </div>
        <header className="header">
          <div className="text-wrapper-25">Dashboard</div>
          <div className="header-right">

            <div className="search-bar">
              <div className="overlap-7">
                <div className="text-wrapper-26">Search...</div>
                <div className="search-icon">
                  <div className="overlap-group-3">
                    <div className="ellipse-7" />
                    <img className="line-3" alt="Line" src="https://c.animaapp.com/oPSv45bI/img/line-2.svg" />
                  </div>
                </div>
              </div>
            </div>
            {/* <MaskGroup
              className="rounded-full mask-group-instance"
              maskGroup={userObject.picture}
            /> */}

            <img className="vector-5" alt="Vector" src={bell_icon} />
          </div>

        </header>
        <div className="overlap-group-wrapper">
          {!showprofile && <div className="div-3">
            <div className="frame-8" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div className="controls-wrapper">
                <img className="controls" alt="Controls" src="https://c.animaapp.com/oPSv45bI/img/controls.svg" />
              </div>
              <div className="text-wrapper-27">Add Profile</div>
            </div>
          </div>}

          {showprofile && <div className="div-3 ">

            <div className="frame profile profile-card">
              <div className="name">
                <div className="text-wrapper">{profileInput.name}</div>
              </div>
              <div className="info">
                <div className="whatsap input">
                  <img className="button" alt="Button" src={mail} />
                  <div className="text-wrapper">{profileInput.email}</div>
                </div>
                <div className="instagram input">
                  <img className="button" alt="Button" src={instagram} />
                  <div className="text-wrapper">{profileInput.instagram}</div>
                </div>
                <div className="youtube input">
                  <img className="button" alt="Button" src={youtube} />
                  <div className="text-wrapper">{profileInput.youtube}</div>
                </div>
                <div className="email input">
                  <img className="button" alt="Button" src={whatsapp} />
                  <div className="text-wrapper">{profileInput.phone}</div>
                </div>
              </div>
            </div>

          </div>}


        </div>
      </div>

      {
        showModal && < Addprofile profileInput={profileInput} setShowprofile={setShowprofile} showprofile={showprofile} onClick={handleShow} handleShow={handleShow} style={{
          content: {
            background: 'rgba(0, 0, 0, 0.5)',
          }
        }
        } />}

    </div>
  )
}

export default Dashboard
