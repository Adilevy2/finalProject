import React, { useState,useContext } from "react";
import axios from "axios";
import "../CssFiles/Search.css"
import { AllContext } from './../context/Context';
import CompanyLists from "./CompanyLists";
import ListAddedModal from './ListAddedModal';
import ListAllreadyAdded from './ListAllreadyAdded';
import NeedToLogin from './NeedToLogin';
const Search = () => {
const {companyEmail,setCompanyEmail,companyLists,setCompanyLists,listAdded,listAllreadyAdded,needToLogin}=useContext(AllContext)
const [name, setName] = useState("");
const [user, setUser] = useState([]);
const [hidden, setHidden] = useState(true);
const searchUser = async () => {
    try {
    const response = await axios.get(
        `https://qrcontrol-server.onrender.com/api/users/${name}`
    );
    setUser(response.data);
    setHidden(false);
    } catch (error) {
    console.error(error);
    }
};

const showLists=(val)=>{
    console.log(val)
    setCompanyEmail(val)
    setCompanyLists(true)
}
return (
    <div style={{minHeight:'45rem'}} className='ALLSEARCH'>
        {
            companyLists &&
            <CompanyLists/>
        }
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
        <div className="flex justify-center">
    <div  className="text-center mt-16 text-3xl w-2/4">
        <p className=" rounded-lg shadow-black">Hello, Here you can search for a compeny name <br /> and get all the information that you need!</p>
    </div>
        </div>
    <div className="justify-center flex mt-12 w-full ">
        <input
        className="w-2/4 h-8 border-solid border-2 border-black rounded-lg"
        type="text"
        placeholder="Type Here The Company Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
        <button
        className="ml-8 bg-blue-600 p-0.5 text-white rounded-lg hover:bg-blue-800 w-20 flex justify-center"
        onClick={() => searchUser()}
        >
            Search   
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
        </svg>
        </button>
    </div>
    {user.length === 0 ?<p className="text-center mt-20 text-3xl">Company Not Found!</p>:(
        <div className="justify-center flex mb-4" id="search_user">
        <div className="animation-fade-in-up mt-24 w-4/12 border-solid border-2 border-black shadow-black bg-slate-50 rounded-lg" >
            <div className="text-center m-2">
            <p className="text-5xl">{user.name}</p>
            <p className="mt-4 mb-4 text-2xl">Address : {user.adress}</p>
            <div className="text-start">
                <p className="text-xl mb-4">Phone Number: {user.phoneNumber}</p>
                <p className="text-xl">Email Addrees: {user.email }</p>
            </div>
            <div>
                <button onClick={()=>showLists(user.email)} className="bg-blue-600 p-0.5 text-white rounded-lg mt-8 hover:bg-blue-800">
                Show Company
                <br />
                Lists
                </button>
            </div>
            </div>
        </div>
        </div>
    )}
    </div>
);
};

export default Search;
