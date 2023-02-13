import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";

const AdminContactUs = () => {
  let decode={}
  const [contact, setContact] = useState([]);
  const [email, setEmail] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const getData = async () => {
      if(localStorage.getItem('token')){

        decode=jwtDecode(localStorage.getItem('token'))
        setEmail(decode.email)
      }
      if(!localStorage.getItem('token'))
      navigate('/')
      const result = await axios.get("https://qrcontrol-server.onrender.com/api/contactUs");
      setContact(result.data);
    };

    getData();
  }, []);

  const condelete = async (id) => {
    await axios.delete(`https://qrcontrol-server.onrender.com/api/contactUs/${id}`);
    setContact(contact.filter((con) => con._id !== id));
  };

  return (
    <div style={{minHeight:'32rem'}} className="mt-4">
      {email!=='adi@gmail.com'?<h1 className="text-center text-4xl font-bold text-red-500">Hi,youre not the admin</h1>:<div>
      <h1 className="text-center text-4xl font-bold">Hello admin</h1>
      {contact.length==0?<h1 className="text-center text-4xl font-bold mt-24 text-red-500">there is currentlly no contact calls</h1>:<div>
      <p className="text-center text-4xl">Contact</p>
      <p className="text-center text-2xl">All the users that send a message</p>
      <div className=" flex w-full">
        <table className="border-collapse border-slate-400 m-4 w-full ">
          <thead>
            <tr>
              <th className="border border-slate-300 w-1/4">Name</th>
              <th className="border border-slate-300 w-1/4">Email</th>
              <th className="border border-slate-300 w-2/4">Message</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <tr>
                <th
                  className="border border-slate-300 w-1/4 text-start font-normal"
                  key={item.name}>
                  {item.name}
                </th>
                <th
                  className="border border-slate-300 w-1/4 text-left font-normal"
                  key={item.name}>
                  {item.email}
                </th>
                <th
                  className="border border-slate-300 w-full text-left font-normal justify-between flex "
                  key={item.name}>
                  {item.message}
                  <button
                    className="mr-6 bg-red-600 p-0.5 text-white rounded-lg	"
                    onClick={() => condelete(item._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>}</div>}
    </div>
  );
};

export default AdminContactUs;
