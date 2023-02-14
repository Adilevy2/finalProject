import React from 'react';
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import '../CssFiles/app.css';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import axios from 'axios';
import { useContext } from 'react';
import { AllContext } from './../context/Context';
import AreYouSureDeleteMyLists from './AreYouSurDeleteMyLists';

const MyAddedLists = () => {
    let decode={}
    const navigate=useNavigate()   
    const {areYouSureDeleteMyLists,setAreYouSureDeleteMyLists,setListId}=useContext(AllContext)
     const [data, setData] = useState([]);
    useEffect(() => {
        async function getData(){
            try{
            if(localStorage.getItem('token')){
                decode=jwtDecode(localStorage.getItem('token'))
                const submit=await axios.post('https://qrcontrol-server.onrender.com/api/myListClient',{email:decode.email})
                console.log(submit)
                setData(submit.data)
           }
           else{
               navigate('/')
           }

            }
            catch{
               alert('oops somthing went wrong') 
            }
            }
        getData()
    }, []);

    const editAllList=(listId)=>{
        setAreYouSureDeleteMyLists(true)
        setListId(listId);    
     }
     console.log(data)
    return (
        <div style={{minHeight: '34rem'}} className='bg-slate-100'>
            {areYouSureDeleteMyLists &&
            <AreYouSureDeleteMyLists/>
            }
          

              <div className='fixed'>
            <SideBar/>
            </div>
        <div className='grid place-items-center '>
            <h1 className='text-center text-4xl  mt-6'>My Added Lists</h1>
            
            {data.length==0?<h1 className='text-center text-4xl  mt-24 text-red-500'>You havn't added any lists yet to your personal area</h1>:
            data.map(ev=>ev==null?ev==<h1 className='text-center text-4xl  mt-24 text-red-500'></h1>:<div style={{backgroundColor:`${ev.listBackgroundColor}`}} key={ev._id} className=' mt-8 bg-slate-200 w-5/12  rounded-md border border-2 border-gray-400 drop-shadow-xl hover:drop-shadow-2xl hover:border-rose-800'>
                <h1 className='text-center text-2xl  mt-6'>{ev.companyName}</h1>
                <h1 style={{fontFamily:`${ev.listFont}`,fontSize:`${ev.listFontSize}`}} className='text-center text-xl  mt-8 underline underline-offset-1'>{ev.listName}</h1>
                <div className='mt-8'>
                {ev.content.map(e=><div style={{fontFamily:`${ev.listFont}`,color:`${ev.listFontColor}`,fontSize:`${ev.listFontSize}`}} className=' grid '>
                <div className=' ml-8'>
                <span class="flex items-center mt-2  " >{e.body}
                </span>
                </div>
                    </div>)}
                    <div className='grid grid-cols-12'>
                        <div className='col-start-2 col-span-4'>
                            <p className='sr-only' id='hi'>{ev._id}</p>
                <button id='di' onClick={()=>editAllList(document.activeElement.previousSibling.innerText)} className=" order-last mt-12 ml-4 whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700">Remove list</button>
                        </div>
                    </div>
                <p className='mt-8'></p>
                </div>
                </div>)}
        </div>
        </div>
    );
}

export default MyAddedLists;
