import React from 'react';
import "../CssFiles/NavBar.css"
import logo from "../images/logo.png"
import { useContext, useEffect, useState } from 'react';
import { AllContext } from './../context/Context';
import SignUp from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom'; 
import jwtDecode from 'jwt-decode';

const Navbar = () => {
    let decode={}
    const{modalOnSignUp,setModalOnSignUp,modalOnLogin,setModalOnLogin}=useContext(AllContext)
    const [email, setEmail] = useState('');
    useEffect(() => {
      async function getData(){
          if(localStorage.getItem('token')){
              decode=jwtDecode(localStorage.getItem('token'))
              setEmail(decode.email)
         }
        }
        getData()
  }, []);
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
      <span class="bar">1</span>
      <span class="bar">2</span>
      <span class="bar">3</span>
    </div>
    <ul class="nav no-search">
            {
                !localStorage.token &&
                    <li class="nav-item" onClick={()=>setModalOnLogin(true)}>login</li>
                }
            {
                localStorage.token && email=='adi@gmail.com' &&
                <Link to='/adminContactUs'>
                    <li class="nav-item" >Admin Contact </li>
                </Link>
                }
            {
                localStorage.token && email=='adi@gmail.com' &&
                <Link to='/adminSupport'>
                    <li class="nav-item" >Admin Support </li>
                </Link>
                }
                  {
                !localStorage.token &&
                <li class="nav-item" onClick={()=>setModalOnSignUp(true)}>sign up</li>
                  }
                        {
                            localStorage.token &&
                         <li class="nav-item" onClick={()=>{window.location.reload(false);
                            localStorage.removeItem('token')}}>Log out</li>
                        }
                    {
                localStorage.token &&
                <Link to='/accountArea'>
                <li class="nav-item">My space</li>
                </Link>
                    }
            {
                email!=='adi@gmail.com' &&
                <Link to='/contactUs'>
              <li style={{marginRight:'1rem'}} class="nav-item">Contact Us</li>
                    </Link>
                    }
                    {
              email!=='adi@gmail.com' &&
              <Link to='/search'>
              <li style={{marginRight:'1rem'}} class="nav-item">Search Company</li>
                    </Link>
                    }
    </ul>
  </nav>
  </div>
  </div>
    );
}

export default Navbar;