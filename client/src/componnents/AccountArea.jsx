import { React, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AllContext } from './../context/Context';
import ChangePassword from './ChangePassword';
import ChangeAdress from './ChangeAdress';
import ChangePhoneNumber from './ChangePhoneNumber';
import QR from "../images/QR.png";

const AccountArea = () => {
    const {changePassword,setChangePassword,changeAdress,setChangeAdress,changePhoneNumber,setChangePhoneNumber}=useContext(AllContext)
    const navigate=useNavigate()
    let decode={};
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    useEffect(() => {
        function getToken(){
            if(localStorage.getItem('token')){
                 decode=jwtDecode(localStorage.getItem('token'))
                 console.log(decode)
                 setName(decode.name)
                 setEmail(decode.email)
                 setAdress(decode.adress)
                 setPhoneNumber(decode.phoneNumber)
            }
            else{
                navigate('/')
            }
    }
    getToken()
    }, []);
    return (
        <div style={{minHeight: '28rem'}} className='bg-slate-100' >
            {
               changePassword &&
               <ChangePassword/>
            }
            {
                changeAdress &&
                <ChangeAdress/>
            } 
            {
                changePhoneNumber &&
                <ChangePhoneNumber/>
            }
            <div className='fixed'>
            <SideBar></SideBar>
            </div>
            <div style={{right:'0'}} className='fixed'>
            <img style={{width:'20rem',}} src={QR} className="QR mt-8" />
            </div>
            <h1 className=' text-center text-4xl '>Your Details : </h1>
            <div className='ml-80'>
                <h1 className='mt-8 text-xl '> Name : <span className='ml-12'>{name}</span></h1>
                <h1 className='mt-8 text-xl '> Email : <span className='ml-12'>{email}</span></h1>
                {
                    adress &&
                <h1 className='mt-8 text-xl '> Adress : <span className='ml-12'>{adress}
                <button onClick={()=>setChangeAdress(true)}  className="ml-8 order-last whitespace-nowrap rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600"> Change</button>
                </span></h1>
                } {
                    phoneNumber &&
                <h1 className='mt-8 text-xl '> Phone Number : <span className='ml-12'>{phoneNumber}
                <button onClick={()=>setChangePhoneNumber(true)}  className="ml-8 order-last whitespace-nowrap rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600"> Change</button>
                </span></h1>
                }

            <button onClick={()=>setChangePassword(true)}  className=" order-last mt-8 mb-4 whitespace-nowrap rounded-md border border-transparent bg-zinc-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-500">Change Password</button>

            </div>
        </div>
    );
}

export default AccountArea;
