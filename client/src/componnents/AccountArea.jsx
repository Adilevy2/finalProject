import {React,useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

const AccountArea = () => {
    const navigate=useNavigate()
    let decode={name:''};
    useEffect(() => {
        function getToken(){
            if(!localStorage.getItem('token'))
                 navigate('/')
             decode=jwtDecode(localStorage.getItem('token'))
             console.log(localStorage.getItem('token'));
    }
    getToken()
    }, []);
    return (
        <div style={{minHeight: '32.5rem'}} className='bg-slate-100'>
            <div className='absolute'>
            <SideBar></SideBar>
            </div>
            <h1 className='text-center text-4xl font-bold '> Hello {decode.name}!</h1>
        </div>
    );
}

export default AccountArea;
