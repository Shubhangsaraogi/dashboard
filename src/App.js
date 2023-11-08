import { useEffect, useState } from 'react';
import './App.css';
import Addprofile from './components/Addprofile';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import jwtDecode from 'jwt-decode';
import Navbar from './components/Navbar';
import { GoogleLogin } from '@react-oauth/google';

function App() {

  const token=localStorage.getItem('token');
  const [showDashboard, setShowDashboard] = useState(token?true:false);
  
//   const handleCallback =async (response)=>{

//     localStorage.setItem('user',response.credential);
//     var userObject = jwtDecode(response.credential);
//     // console.log("host uri");
//     // console.log(process.env.REACT_APP_HOST_URI);
//     const res = await fetch(`${process.env.REACT_APP_HOST_URI}/api/user`,{
//         method:'POST',
//         headers:{
//             'Content-type':'application/json',
//         },
//         body:JSON.stringify({email:userObject.email,name:userObject.name})
//     });

//     const result =await res.json();
//     // console.log("result");
//     // console.log(result);

//     // console.log("res.json:");
//     // console.log(res.json());
//     if(result.success)
//     {
//         localStorage.setItem('token',result.authToken)
//         setShowDashboard(true);
//         // props.showAlert("Logged in successfully","success");
//     }
//     else
//     {
//         alert("Invalid Credentials");
//         // props.showAlert("Invalid Credendials","danger");
//     }
// }

//  window.onload= useEffect(() => {

//    window.addEventListener("resize", getWidth);
//     /* global google */ 
//     google.accounts.id.initialize({
//       client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//       callback: handleCallback
//     })
//     /* global google */ 
//     google.accounts.id.renderButton(
//       document.getElementById('loginDiv'),
//       { theme: "outline",shape:"pill",size:`${size}` ,text:'Signin with Google',border:"0"}
//     );
//   }, [])
  const [openmenu, setOpenmenu] = useState(false);
  function showMenu(){
    setOpenmenu(!openmenu);
  }
  
  return (
    <div className="App" id='outer-container'>
      {/* <div id="loginDiv"> */}
      {/* </div> */}
      {
        !showDashboard &&
        <Login setShowDashboard={setShowDashboard} />
      }
      {
        showDashboard &&
        <><Navbar showMenu={showMenu} showDashboard={showDashboard} setShowDashboard={setShowDashboard} /></>
      }
      <Dashboard openmenu={openmenu} />
    </div>
  );
}

export default App;
