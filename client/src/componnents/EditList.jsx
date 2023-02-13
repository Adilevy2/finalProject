import { useContext,useState } from 'react';
import { AllContext } from '../context/Context';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {useFormik} from 'formik';

const EditList = () => { 
  const formik=useFormik({
    initialValues:{
      listFont:'monospace',
      listFontColor:'#000000',
      listFontSize:'1rem',
      listBackgroundColor:'#FFFFFF'
    }
});  
    
const {listId,editList,setEditList,listName}=useContext(AllContext)

const [inputs, setInputs] = useState([{ body: "" }]);

const handleChange = (i, event) => {
  const values = [...inputs];
  values[i].body = event.target.value;
  setInputs(values);
};

const handleAddInput = () => {
  setInputs([...inputs, { body: "" }]);
};

const handleRemoveInput = (i) => {
  const values = [...inputs];
  values.splice(i, 1);
  setInputs(values);
};
const handleDeleteList=async()=>{
    try{
        const submit=await axios.delete(`https://qrcontrol-server.onrender.com/api/deleteList/${listId}`)
            window.location.reload(false);
    }
    catch{
        alert('oops,somthing went wrong')
    }
}

const saveChanges=async()=>{
  let listValues=formik.values;
  listValues['id']=listId
  console.log(listValues)
  try{
    const submitList=await axios.put(`https://qrcontrol-server.onrender.com/api/updateList`,listValues)
  }
  catch{
    alert('oops,somthing went wrong')

  }
    
    for(let i=0;i<inputs.length;i++){
        try{
            const decode=jwtDecode(localStorage.getItem('token'))
             const submitValues=await axios.post(`https://qrcontrol-server.onrender.com/api/todo`,{email:decode.email,listName:listName,body:inputs[i].body})
        }
        catch{
            alert('oops,somthing went wrong')
        }
    }
    setEditList(false)
    window.location.reload(false);
}
let listValues=formik.values;
listValues['id']=listId
console.log(listValues)
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
        <h2 className="mt-6 text-center text-3xl  tracking-tight text-gray-900 font-sans">Edit List</h2>
    </div>
    <form className="mt-8 space-y-6" >
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">


      {inputs.map((input, i) => (
          <div className='flex flex-nowrap' key={i}>
            <input onChange={(event) => handleChange(i, event)} value={input.body}  name="body" type="text" autocomplete="body" required className="relative block w-full  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder='Add line'/>
          {i > 0 && (
              <button onClick={() => handleRemoveInput(i)} type="button" className=" bg-red-400 mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">remove line</button>
             
          )}
        </div>
      ))}
      </div>
      <button onClick={()=>handleAddInput()} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Add another line</button>
     
      <div>
                            <label>List Font - </label>
                            <select onChange={formik.handleChange} name='listFont'>
                              <option value='monospace'>mono</option>
                              <option value='serif'>serif</option>
                              <option value='sans-serif'>sans</option>
                              <option value='fantasy'>fantasy</option>
                              <option value='cursive'>cursive</option>
                              <option value='fangsong'>fangsong</option>
                            </select>
                            <br/>
                            <label>List Font Color - </label>
                            <input onChange={formik.handleChange}  type="color"  name="listFontColor" />
                            <br/>
                            <label>List Background Color - </label>
                            <input onChange={formik.handleChange} defaultValue='#FFFFFF' type="color"  name="listBackgroundColor" />
                            <br/>
                            <label>Font Size - </label>
                            <select onChange={formik.handleChange} id='fontSize' name="listFontSize">
                              <option value='1rem'>regular</option>
                              <option value='1.3rem'>xl</option>
                              <option value='1.5rem'>2xl</option>
                            </select>
                          </div>
    </form>
  </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={()=>setEditList(false)}  type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
          <button onClick={()=>saveChanges()} type="button" className="mt-3 bg-green-300 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Save Changes</button>
          <button onClick={()=>handleDeleteList()} type="button" className="mt-3 bg-red-300 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Delete List</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default EditList;