import { AllContext } from '../context/Context';
import React, { useContext,useEffect,useState } from "react";
import axios from 'axios';

import jwtDecode from 'jwt-decode';

const CompanyLists= () => {
    const {setCompanyLists,companyEmail,setNeedToLogin,setListAllreadyAdded,setListAdded}=useContext(AllContext)
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    let decode={}

    useEffect(() => {
        async function getData(){
        const submit=await axios.post('https://qrcontrol-server.onrender.com/api/getList',{email:companyEmail})
        if(localStorage.getItem('token')){
            decode=jwtDecode(localStorage.getItem('token'))
            setEmail(decode.email)
       }   
        setData(submit.data)}
        getData()
    }, []);
    
    const addList= async(val)=>{
        if(!localStorage.getItem('token')){
             setNeedToLogin(true)
           return setCompanyLists(false)
        }
        const add=await axios.post('https://qrcontrol-server.onrender.com/api/addMyListClient',{email:email,id:val})
        if(add.data=='you allready added this list'){
            setListAllreadyAdded(true)
            setCompanyLists(false)
        }
        else{
            setListAdded(true)
            setCompanyLists(false)

        }
    } 
    return ( 
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className=" ">
           
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            {data.length==0?<h1 className='text-center text-4xl font-bold mt-24 text-red-500'>This compnay dosnt have any lists to show </h1>:data.map(ev=>ev=<div style={{backgroundColor:`${ev.listBackgroundColor}`}} className=' mt-8 mb-6 rounded-md border border-2 border-gray-400 drop-shadow-xl hover:drop-shadow-2xl hover:border-blue-800'>
                <h1 style={{fontFamily:`${ev.listFont}`}} className='text-center text-xl font-bold mt-8 underline underline-offset-1'>{ev.listName}</h1>
                <div className='mt-8'>
                {ev.content.map(e=><div style={{fontFamily:`${ev.listFont}`,fontSize:`${ev.listFontSize} ` }} className='hover:text-red-600  grid '>
                <div className=' ml-8'>
                <span style={{color:`${ev.listFontColor}`}} class="flex items-center mt-2 font-bold " >{e.body}
                </span>
                </div>
                    </div>)}
                <div className='col-start-2 col-span-4'>
                <p className='sr-only' id='idList'>{ev._id}</p>
                <button onClick={()=>addList(document.activeElement.previousSibling.innerText)} className=" order-last mt-6 mb-6 ml-4 whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700">Add list</button>
                        </div>
                    
                </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={()=>setCompanyLists(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default CompanyLists ;