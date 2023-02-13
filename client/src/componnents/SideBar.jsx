import {React,useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddList from './AddList';
import { useContext } from 'react';
import { AllContext } from './../context/Context';



const SideBar = () => {
    let decode={}
    const navigate=useNavigate()
    useEffect(() => {
        function getToken(){
            if(localStorage.getItem('token')){
                 decode=jwtDecode(localStorage.getItem('token'))
                 
            }
            else{
                navigate('/')
            }
    }
    getToken()
    }, []);   
     return (
        <div >
           
             <body class="flex items-start space-x-6 ">

<div class="flex flex-col items-center h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
   
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mt-6 ">
  <path stroke-linecap="round" sttjoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<span>Account</span>

    <div class="flex flex-col items-center mt-3 border-t border-gray-700">
            <Link to='/myLists'>
        <span class="flex items-center justify-center w-36 h-16 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>My lists
        </span>
            </Link> 
          
            <Link to='/addList'>
        <span  class="flex items-center justify-center w-36 h-16 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>Add a list
        </span>
            </Link>
            
        <Link to='/myAddedLists'>
        <span class="flex items-center justify-center w-36 h-16 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>My added lists
        </span>
        </Link>
        
    </div>
    
    
</div>
</body>
        </div>
    );
}

export default SideBar;
