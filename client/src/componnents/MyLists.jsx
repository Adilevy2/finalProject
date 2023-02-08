import React from 'react';
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import '../CssFiles/app.css';
import SideBar from './SideBar';
import axios from 'axios';

const MyLists = () => {
    const decode=jwtDecode(localStorage.getItem('token'))
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData(){
        const submit=await axios.post('http://localhost:4000/api/getList',{email:decode.email})
        setData(submit.data)}
        getData()
    }, []);
    return (
        <div style={{minHeight: '32.5rem'}} className='bg-slate-100'>

              <div className='fixed'>
            <SideBar></SideBar>
            </div>
        <div className='grid place-items-center '>
            <h1 className='text-center text-4xl font-bold mt-6'>My Lists</h1>
            
            {data.length==0?<h1 className='text-center text-4xl font-bold mt-24 text-red-500'>You dont have any lists yet</h1>:data.map(ev=>ev=<div className=' mt-8 bg-slate-200 w-5/12  rounded-md border border-2 border-gray-400 drop-shadow-xl hover:drop-shadow-2xl hover:border-blue-800'>
                <h1 className='text-center text-2xl font-bold mt-6'>{ev.companyName}</h1>
                <h1 className='text-center text-xl font-bold mt-8 underline underline-offset-1'>{ev.listName}</h1>
                <div className='mt-8'>
                {ev.content.map(ev=><div className='hover:text-red-600 showhim grid '>
                    
                <div className='show1 ml-8'>
                <span class="flex items-center mt-2 font-bold " >{ev.body}
                </span>
                </div>
                <div className='show2 ml-8'>
                <span class="flex items-center mt-2 font-bold " >{ev.body}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </span>
                </div>

                    </div>)}
                    <div className='grid grid-cols-12'>
                    
                        <div className='col-start-2 col-span-4'>
                <button className=" order-last mt-12 ml-4 whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700">Edit</button>
                        </div>
                        <div className='col-start-9 col-span-11'>
                <button className=" order-last mt-12 ml-4 whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Generate QR</button>
                        </div>
                    </div>
                <p className='mt-8'></p>
                </div>
                </div>)}
        </div>
        </div>
    );
}

export default MyLists;
