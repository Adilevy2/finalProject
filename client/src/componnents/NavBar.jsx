import React from 'react';
import "../CssFiles/NavBar.css"
import logo from "../images/logo.png"
import { useContext, useEffect } from 'react';
import { AllContext } from './../context/Context';
import SignUp from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const{modalOnSignUp,setModalOnSignUp,modalOnLogin,setModalOnLogin}=useContext(AllContext)
   
    return (
        <div class="page-wrapper">
            {
                modalOnSignUp &&
                <SignUp/>
            }
            {
                modalOnLogin &&
                <Login/>
            }
 <div class="nav-wrapper">
  <div class="grad-bar"></div>
  <nav class="navbar">
    <Link to='/'>
    <img src={logo} className="w-36"/>   
    </Link>
    <div class="menu-toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="nav no-search">
            {
                !localStorage.token &&
                    <li class="nav-item" onClick={()=>setModalOnLogin(true)}>login</li>
                }
                  {
                !localStorage.token &&
                <li class="nav-item" onClick={()=>setModalOnSignUp(true)}>sign up</li>
                  }
                    {
                localStorage.token &&
                <Link to='/accountArea'>
                <li class="nav-item">My space</li>
                </Link>
                    }
                    <Link to='/contactUs'>
      <li class="nav-item">Contact Us</li>
                    </Link>
            {
                localStorage.token &&
             <li class="nav-item" onClick={()=>{window.location.reload(false);
                localStorage.removeItem('token')}}>Log out</li>
            }
    </ul>
  </nav>
  </div>
  </div>
    );
}

export default Navbar;