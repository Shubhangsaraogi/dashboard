import React, { useState } from 'react'

import "../static/style/modal.css"
import "../static/style/button.css"
import "../static/style/button-group.css"
import close from "../static/close.svg"
const Addprofile = (props) => {
    const { handleShow } = props;
    const [toggleNav, setToggleNav] = useState(true);

    function handlenav() {
        setToggleNav(!toggleNav);
    }
    const [profile, setprofile] = useState({ email: "", name: "",phone:"",instagram:"",youtube:"" })
    console.log("token:"+localStorage.getItem('token'));
    
    const handleAddProfile = async (e) => {
        e.preventDefault();
        console.log("data passed:");
        console.log( profile.name,profile.email,profile.phone,profile.instagram,profile.youtube);
        const response = await fetch(`${process.env.REACT_APP_HOST_URI}/api/addprofile`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
          body:JSON.stringify({email:profile.email,name:profile.name,phone:profile.phone,instagram:profile.instagram,youtube:profile.youtube})
        })
        const result = await response.json();
        console.log("result:");
        console.log(result);
        if (result.success) {
          props.setShowprofile(true);
          props.profileInput.email = result.profile.email;
          props.profileInput.name = result.profile.name;
          props.profileInput.phone = result.profile.phone;
          props.profileInput.instagram = result.profile.instagram;
          props.profileInput.youtube = result.profile.youtube;
        }
        else {
          props.setShowprofile(false);
        }
        handleShow()
      }

    const onchange = (a) => {
        setprofile({ ...profile, [a.target.name]: a.target.value })
    }
    return (
        <>


            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content overlap-group">
                        <div className="modal-header header-module">
                            <div className="modal-title header-holder">
                                <div className="title">Add New Profile</div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}>
                                    <img src={close}/>
                                </button>
                            </div>
                            <img className="divider" alt="Divider" src="https://c.animaapp.com/PeMFLRpz/img/divider.svg" />
                        </div>
                        <div className="inputs">
                        <form onSubmit={handleAddProfile}>

                        <div className="modal-body content-placeholder">
                            <div className="frame">
                                <div className={`div ${!toggleNav && 'toggle-bar-contact'}`}></div>
                                <div onClick={handlenav} className="input-title">Basic</div>
                                <div onClick={handlenav} className="contact input-title">Contact</div>
                                <div className={`rectangle ${!toggleNav && 'toggle-bar-basic'}`} />
                                <div className="rectangle-2" />
                            </div>

                            {toggleNav && <div className="basic-input">
                                <div className="text-input-wrapper">
                                    <div className="text-input">
                                        <div className="input-title-2">Enter&nbsp;&nbsp;Name*</div>
                                        <div className="input-container">
                                            <input type='text' onChange={onchange} value={profile.name} name='name' className="placeholder-text" placeholder='Eg. John Doe'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-input-2">
                                    <div className="input-title-3">Enter Email*</div>
                                    <div className="chip-holder">
                                        <input type='email' onChange={onchange} value={profile.email} name='email' className="placeholder-text-2" placeholder='Eg. John@xyz.com'/>
                                    </div>
                                </div>
                                <div className="text-input-3">
                                    <div className="input-title-3">Enter Phone*</div>
                                    <div className="chip-holder">
                                        <input type='text' onChange={onchange} value={profile.phone} name='phone' className="placeholder-text-2" placeholder='Eg.&nbsp;&nbsp;9123456789'/>
                                    </div>
                                </div>
                            </div>}
                            {!toggleNav && <div className="contact-input">
                                <div className="text-input-wrapper">
                                    <div className="text-input">
                                        <div className="input-title-2">Instagram Link</div>
                                        <div className="input-container">
                                            <input type='text' onChange={onchange} value={profile.instagram}name="instagram" placeholder='Eg... instagram.com/username' className="placeholder-text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-input-2">
                                    <div className="input-title-3">Youtube Link</div>
                                    <div className="chip-holder">
                                        <input type='text' onChange={onchange} value={profile.youtube} name='youtube' placeholder='youtube.com/username' className="placeholder-text-2"/>
                                    </div>
                                </div>

                            </div>}

                        </div>
                        <div className="modal-footer footer-module">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            {/* <img className="seperator" alt="Seperator" src="https://c.animaapp.com/PeMFLRpz/img/seperator.svg" /> */}
                            <div className="button-container">

                                <div className="contact-btn-container">

                                <div className="button-group contact-button">
                                {toggleNav && <button onClick={handlenav} className="done">
                                        <div  className="done-button">Next</div>
                                    </button>}
                                </div>

                                    
                                </div>
                                {!toggleNav && <div className="contact-btn-container">

                                    <div className="contact-button">
                                        <button className="blank">
                                            <div className="blank-text">{""}</div>
                                        </button>
                                        <button onClick={handlenav} className="back">
                                            <div  className="back-button">Back</div>
                                        </button>
                                        <button type='submit' className="done">
                                            <div className="done-button">Done</div>
                                        </button>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Addprofile
