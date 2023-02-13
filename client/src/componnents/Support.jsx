import {useFormik} from 'formik'
import { AllContext } from '../context/Context';
import React, { useContext } from "react";
import axios from 'axios';

const Support = () => { 
    const formik=useFormik({
    initialValues:{
        body:'',
        email:'',
        name:''
    }
});  
const { setSupport} = useContext(AllContext);
const handleSubmitSupport=async(ev)=>{
    ev.preventDefault()
    try{

        const submit=await axios.post('https://qrcontrol-server.onrender.com/api/support',formik.values)
        setSupport(false)
    }
    catch{
        alert('oops sothing went wrong')
    }
}
    return ( 
        <div>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
           <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div>
           <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full  items-end place-content-end p-4 text-center sm:items-center sm:p-2">
                 <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-3/12 ">
                   
                    <div>
                        <div className='bg-blue-600 w-full grid grid-cols-12'>
                            <div className='col-span-11'>
                        <h1 className="text-2xl font-bold text-center text-white">Support</h1>
                            </div>
                            <div className='col-span-1'>
                        <button onClick={()=>setSupport(false)} className='text-4xl text-center text-white'>-</button>
                            </div>

                        </div>
                            <form onSubmit={(ev)=>handleSubmitSupport(ev)}>
                                
                            <div className="mx-4 mt-2 grid grid-cols-4 gap-6">
                            <div className="col-span-6 sm:col-span-4">
                            <label className="text-xl font-bold block text-sm font-medium text-gray-700">Your name</label>     
                            <input onChange={formik.handleChange} name="name" required className="h-8 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type='text'></input>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                            <label className="text-xl font-bold block text-sm font-medium text-gray-700">email</label>     
                            <input onChange={formik.handleChange} required name="email" className="h-8 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type='text'></input>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                            <label className="text-xl font-bold block text-sm font-medium text-gray-700">How can we help you?</label>     
                            <textarea onChange={formik.handleChange} required id="about" name="body" rows="4" className=" resize-none mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"></textarea>
                            </div>
                            </div>
                               
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                       <button type="submit" className=" bg-indigo-600 text-slate-50 hover:bg-indigo-700 mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">send</button>
                    </div>
                            </form>
                    </div>
                       
                    
                 </div>
              </div>
           </div>
        </div>
     </div>
     );
}
 
export default Support;