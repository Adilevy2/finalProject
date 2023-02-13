import React from 'react';
import { useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import '../CssFiles/app.css';
import { useNavigate } from 'react-router-dom';
import AreYouSureDeleteTodo from './AreYouSureDeleteTodo';
import SideBar from './SideBar';
import axios from 'axios';
import { useContext } from 'react';
import { AllContext } from './../context/Context';
import EditTodo from './EditTodo';
import EditList from './EditList';
import { QRCodeSVG } from 'qrcode.react';
import QrGenerate from './QrGenerate';

const MyLists = () => {
    let decode={}
    const navigate=useNavigate()   
    const {qrGenerate,setQrGenerate,areYouSureDeleteTodo,setAreYouSureDeleteTodo,setUrl,setListName,setTodoId,editTask,setEditTask,editList,setEditList,listId,setListId}=useContext(AllContext)
     const [data, setData] = useState([]);
    useEffect(() => {
        async function getData(){
            if(localStorage.getItem('token')){
                decode=jwtDecode(localStorage.getItem('token'))
           }
           else{
               navigate('/')
           }
        const submit=await axios.post('https://qrcontrol-server.onrender.com/api/getList',{email:decode.email})
        setData(submit.data)}
        getData()
    }, []);


    const deleteTodo=(value)=>{
        setAreYouSureDeleteTodo(true)
        setTodoId(value)
    }
    const editTodo=(value)=>{
        setEditTask(true)
        setTodoId(value)
    }
    const editAllList=(listId,listName)=>{
        setEditList(true)
        setListId(listId);    
        setListName(listName);    

    }
    const handleGenerageQr=(val)=>{
        const url=`https://imaginative-conkies-9422c1.netlify.app/list/${val}`
        setUrl(url);
        setQrGenerate(true)
    }
    return (
        <div style={{minHeight: '34rem'}} className='bg-slate-100'>
            {areYouSureDeleteTodo &&
            <AreYouSureDeleteTodo/>
            }
            {editTask&&
                <EditTodo/>
            }
            {editList&&
                <EditList/>
            }
            {
                qrGenerate &&
                <QrGenerate/>
            }

              <div className='fixed'>
            <SideBar/>
            </div>
        <div className='grid place-items-center '>
            <h1 className='text-center text-4xl  mt-6'>My Lists</h1>
            
            {data.length==0?<h1 className='text-center text-4xl  mt-24 text-red-500'>You dont have any lists yet</h1>:data.map(ev=>ev=<div style={{backgroundColor:`${ev.listBackgroundColor}`}} className=' mt-8 mb-6  w-5/12 rounded-md border border-2 border-gray-400 drop-shadow-xl hover:drop-shadow-2xl hover:border-blue-800'>
                <h1 className='text-center text-2xl  mt-6'>{ev.companyName}</h1>
                <h1 style={{fontFamily:`${ev.listFont}`}} className='text-center text-xl  mt-8 underline underline-offset-1'>{ev.listName}</h1>
                <div className='mt-8'>
                {ev.content.map(e=><div style={{fontFamily:`${ev.listFont}`,fontSize:`${ev.listFontSize} ` }} className='hover:text-red-600 showhim grid '>
                <div className='show1 ml-8'>
                <span style={{color:`${ev.listFontColor}`}} class="flex items-center mt-2  " >{e.body}
                </span>
                </div>
                <div className='show2 ml-8'>
                <span class="flex items-center mt-2  " >{e.body}
                <svg onClick={()=>deleteTodo(e._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg onClick={()=>editTodo(e._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

                </span>
                </div>

                    </div>)}
                    <div className='grid grid-cols-12'>
                        <div className='col-start-2 col-span-4'>
                            <p className='sr-only' id='idList'>{ev._id}</p>
                            <p className='sr-only' id='listName'>{ev.listName}</p>
                <button onClick={()=>editAllList(document.activeElement.previousSibling.previousSibling.innerText,document.activeElement.previousSibling.innerText)} className=" order-last mt-12 ml-4 whitespace-nowrap rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-cyan-700">Edit</button>
                        </div>
                        <div className='col-start-9 col-span-11'>
                            <p className='sr-only' id='idList'>{ev._id}</p>
                <button onClick={()=>handleGenerageQr(document.activeElement.previousSibling.innerText)} className=" order-last mt-12 ml-4 whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Generate QR</button>
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
