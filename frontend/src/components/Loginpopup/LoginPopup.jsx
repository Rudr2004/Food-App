//import React from 'react'
import {  useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
const LoginPopup = ({setShowlogin}) => {
  const {url, setToken} = useContext(StoreContext)
    const [currentState, setCurretState] = useState("Sign Up")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:"",
    });
    
    const onChangeHandler = (evetn)=>{
      const name = evetn.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }
    const onLogin = async(event)=>{
      event.preventDefault();
      let newUrl = url;
      if(currentState==="Login"){
        newUrl +="/api/user/login"
      }
      else{
        newUrl += "/api/user/register"           
      }
      const response = await axios.post(newUrl,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowlogin(false)
      }
      else{
        alert(response.data.message)
      }
    }
  return (
    <div className='Loginpopup'>
     <form onSubmit={onLogin} className='loginn-popup-container'>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter your Name' required /> }
            <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter your E-mail' required/>
            <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter your password' required/>
        </div>
        <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, I agree to the Terms and Conditions </p>
        </div>
        {currentState ==="Login"? <p>Create a new Account? <span onClick={()=>setCurretState("Sign Up")}>Click Here</span></p> : <p>Already have an Account? <span onClick={()=>setCurretState("Login")}>Login Here</span></p> }
        
        
     </form>
    </div>
  )
}

export default LoginPopup
