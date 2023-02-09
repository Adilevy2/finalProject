import React, { useState } from "react";
import axios from "axios";
import jwtDecode  from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const ChangePasswordForm =  () => {
    const navigate=useNavigate()
    try{

        const decode=jwtDecode(localStorage.getItem('token'))
    }
    catch{
        navigate('/')
    }

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (currentPassword === "") {
      alert("Current password is required");
      return;
    }

    if (newPassword === "") {
      alert("New password is required");
      return;
    }

    if (confirmPassword === "") {
      alert("Confirm password is required");
      return;
    }

    if (newPassword != confirmPassword) {
        
      alert("New password and confirm password do not match");
      return;
    }

      const submit= await axios.put('http://localhost:4000/api/ChangePassword',{password:newPassword,email:decode.email,prevPass:currentPassword});
      console.log(submit.data)
 if(submit.data == "invalid password")
 alert("current password is invalid")
 else{
    alert("Password updated successfully")

 }

    // code to submit the form (e.g. make an API call)
  };

  return (
    <form onSubmit={handleSubmit} style={{width:'20%',height:'10%',marginLeft:"73%",border:"solid",borderRadius:'7%',backgroundColor:"#DBE0EF"}}>
                  <label class="block font-extrabold text-center text-blue-400 mb-2" for="current-password">
      Change Password:
    </label>
      <div className="mb-4">
      <label class=" ml-3 block font-bold mb-2" for="current-password">
          Current Password:
        </label>
        <input
      class="w-fit ml-3 border border-gray-400 p-2 rounded-full"
      type="password"
          id="current-password"
          name="current-password"
          required
          value={currentPassword}
          onChange={(event) => setCurrentPassword(event.target.value)}
        />
      </div>

      <div className="mb-4">
      <label class=" ml-3 block font-bold mb-2" for="new-password">
          New Password:
        </label>
        <input
      class="w-fit ml-3 border border-gray-400 p-2 rounded-full"
      type="password"
          id="new-password"
          name="new-password"
          required
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </div>

      <div className="mb-4">
      <label class="ml-3 block font-bold mb-2" for="confirm-password">
          Confirm Password:
        </label>
        <input
      class="w-fit ml-3 border border-gray-400 p-2 rounded-full"
      type="password"
          id="confirm-password"
          name="confirm-password"
          required
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-14 px-4 rounded ">
        Change Password
      </button>
    </form>
  );
};

export default ChangePasswordForm;
