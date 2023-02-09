import {React,useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

const AccountArea = () => {
    const navigate=useNavigate()
    let decode={};
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
        <div style={{minHeight: '34rem'}} className='bg-slate-100'>
            <div className='absolute'>
            <SideBar></SideBar>
            </div>
            <h1 className='text-center text-4xl font-bold '> Hello {decode.name}!</h1>
        </div>
    );
}

export default AccountArea;
