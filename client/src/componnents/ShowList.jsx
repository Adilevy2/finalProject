import {React,useState,useEffect} from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useContext } from 'react';
import { AllContext } from './../context/Context';
import ListAddedModal from './ListAddedModal';
import ListAllreadyAdded from './ListAllreadyAdded';
import '../CssFiles/Page404.css'
import NeedToLogin from './NeedToLogin';

const ShowList = () => {
    const {listAdded,setListAdded,listAllreadyAdded,setListAllreadyAdded,needToLogin,setNeedToLogin}=useContext(AllContext)
    const params=useParams()
    const [data, setData] = useState([]);
    const [email, setEmail] = useState([]);
    const navigate=useNavigate()
    let decode={};
    useEffect(() => {
        async function getData(){
            try{

                if(localStorage.getItem('token')){
                    decode=jwtDecode(localStorage.getItem('token'))
                    setEmail(decode.email)
                }
                
                const submit=await axios.post('https://qrcontrol-server.onrender.com/api/getOneList',{id:params.list})
                setData(submit.data)
            }
            catch{
                alert('oops somthing went wrong')
            }
    
    }
        getData()
    }, []);


    const addList= async()=>{
        if(!localStorage.getItem('token'))
         return setNeedToLogin(true)
        const add=await axios.post('https://qrcontrol-server.onrender.com/api/addMyListClient',{email:email,id:params.list})
        if(add.data=='you allready added this list')
        setListAllreadyAdded(true)
        else
        setListAdded(true)
    } 
    return (
        <div>
            {
                listAdded &&
                <ListAddedModal/>
            }
            {
                listAllreadyAdded &&
                <ListAllreadyAdded/>
            }
            {
                needToLogin &&
                <NeedToLogin/>
            }
                  <div className='grid place-items-center mb-8'>            
            {data.length==0 && typeof(data)!=='string'?  
             <div className='page404s'>
             <body className='notFound'>
     <section class="notFound">
         <div class="img">
             <Link to='/'>
         <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
             </Link>
         <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
         </div>
         <div class="notFound">
         <h1>404</h1>
         <h2 style={{color:'white'}}>PAGE NOT FOUND</h2>
         </div>
     </section>
 </body>
         </div>
                        
            :<div style={{backgroundColor:`${data.listBackgroundColor}`}} key={data._id} className=' mt-8 bg-slate-200 w-5/12  rounded-md border border-2 border-gray-400 drop-shadow-xl hover:drop-shadow-2xl hover:border-green-800'>
                <h1 className='text-center text-2xl  mt-6'>{data.companyName}</h1>
                <h1 style={{fontFamily:`${data.listFont}`,fontSize:`${data.listFontSize}`}} className='text-center text-xl  mt-8 underline underline-offset-1'>{data.listName}</h1>
                <div className='mt-8'>
                    <ul className='list-disc'>

                {data.content.map(e=><div style={{fontFamily:`${data.listFont}`,color:`${data.listFontColor}`,fontSize:`${data.listFontSize}`}} className=' grid '>
                <li className=' ml-8'>
                <span class="flex items-center mt-2  " >{e.body}
                </span>
                </li>
                    </div>)}
                    </ul>
                    <div className='grid grid-cols-12'>
                        <div className='col-start-2 col-span-4'>
                <button onClick={()=>addList()}  className=" order-last mt-12 ml-4 whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700">Add list</button>
                        </div>
                    </div>
                <p className='mt-8'></p>
                </div>
                </div>}
        </div>
        </div>
    );
}

export default ShowList;
