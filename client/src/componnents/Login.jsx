import {useFormik} from 'formik'
import { useContext,useState } from 'react';
import { AllContext } from '../context/Context';
import axios from 'axios';


const Login = () => { 
    const formik=useFormik({
    initialValues:{
        email:'',
        password:''
    }
});  
const [message,setMessage] = useState();
const {modalOnSignUp,setModalOnSignUp,modalOnLogin,setModalOnLogin}=useContext(AllContext)

const handleSubmit=async(e)=>{
    try{
        e.preventDefault()
        const submit=await axios.post('https://qrcontrol-server.onrender.com/api/login',formik.values)
        if(submit.data=='invalid email or password')
        return setMessage(<p className="font-medium text-red-500 hover:text-red-600">invalid email or password</p>)
        else if(submit.data=='invalid password')
        return setMessage(<p className="font-medium text-red-500 hover:text-red-600">invalid password </p>)
        else{
            setModalOnLogin(false)
            localStorage.setItem('token',submit.data)   
        }
        if(formik.values.email=='adi@gmail.com')
        window.location.reload(false);

    }
    catch{
        alert('oops,somthing went wrong')
    }
}
    return ( 
        <div>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start items-center justify-center">
          
  <div className="w-full max-w-md space-y-8 ">
    <div >
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 font-sans">Log in to your account</h2>
    </div>
    <form className="mt-8 space-y-6" action="#" onSubmit={(ev)=>handleSubmit(ev)}>
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <input  onChange={formik.handleChange}  name="email" type="text" autocomplete="email" required className="relative block w-full  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="email"/>
        </div>
        <div>
          <input onChange={formik.handleChange} name="password" type="password" autocomplete="password" required className="relative block w-full mt-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
       
            {message}
       
      </div>

      <div className='grid'>
        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>Log in
        </button>
      </div>
    </form>
  </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={()=>setModalOnLogin(false)}  type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default Login;