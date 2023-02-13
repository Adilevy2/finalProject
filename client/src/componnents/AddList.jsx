import { useState } from "react";
import axios from "axios";
import jwtDecode  from "jwt-decode";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const AddList = () => {
  const [todo, setTodo] = useState([{ body: "" }]);
  const [message, setMessage] = useState('');
  let navigate=useNavigate()
  let decode={};
  if(localStorage.getItem('token')){
     decode=jwtDecode(localStorage.getItem('token'))
}
else{
   navigate('/')
}  const email=decode.email;
  const campanyName=decode.name
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const listName = e.target.elements.listName.value;
      const listFont = e.target.elements.listFont.value;
      const listFontColor = e.target.elements.listFontColor.value;
      const listBackgroundColor = e.target.elements.listBackgroundColor.value;
      const listFontSize = e.target.elements.listFontSize.value;
      for(let i=0;i<todo.length;i++){
        const body=todo[i].body
        const to = await axios.post("https://qrcontrol-server.onrender.com/api/todo", {
          listName:listName,
          body:body,
          email:email
        });
      }
     const submit=await axios.post("https://qrcontrol-server.onrender.com/api/addList", {
      listName:listName,
      companyName:campanyName,
      email:email,
      listFont:listFont,
      listFontColor:listFontColor,
      listFontSize:listFontSize,
      listBackgroundColor:listBackgroundColor
    });
    if(submit.data=='you allready have a list with this name')
    return setMessage(<p className="font-medium text-red-500 hover:text-red-600">you allready have a list with this name</p>)
    navigate('/myLists')
    } catch {
      alert("oops, something went wrong");
    }
  };

  const handleTodoAdd = () => {
    setTodo([...todo, { body: "" }]);
  };

  const handleTodoRemove = (index) => {
    console.log(index)
    const list = [...todo];
    list.splice(index, 1);
    console.log(list)
    setTodo(list);
  };
  const handleChange = (i, event) => {
    const values = [...todo];
    values[i].body = event.target.value;
    setTodo(values);
  };
  return (
    <div style={{minHeight: '34rem'}} className='bg-slate-100'>
        <div className="fixed">
        <SideBar/>
        </div>
        <div className="grid place-items-center">
    <div className="">
        {decode.isCompany==true?
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start items-center justify-center">
                  <div className="w-full max-w-md space-y-8 ">
                    <div>
                      <h2 className="mt-6 text-center text-3xl  tracking-tight text-gray-900 font-sans">
                        Add List:
                      </h2>
                      <form
                        className="mt-8 space-y-6"
                        action="#"
                        onSubmit={handleSubmit}
                      >
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              List name:
                            </label>
                            <input
                              name="listName"
                              type="text"
                              autoComplete="List Name"
                              required
                              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="List Name"
                            />
                          </div>
                          {todo.map((singaltodo,i) => (
                            <div key={i} className="grid md:grid-cols-2 ">
                             
                              <input
                                onChange={(event) => handleChange(i, event)}
                                name="body"
                                value={singaltodo.body}
                                type="text"
                                autoComplete="body"
                                required
                                className="relative z-0 group rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-4"
                                placeholder="Task?"
                                />
                              {todo.length > 1 && (
                                  <button
                                  onClick={() => handleTodoRemove(i)}
                                  className="relative z-0 mt-4 ml-40 group rounded-lg border border-transparent bg-red-600 text-sm font-medium text-white hover:bg-red-700 focus:outline-none "
                                  >
                                  &#10006;
                                </button>
                              )}
                                  
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={()=>handleTodoAdd()}
                          className=" relative z-0 w-fit   group rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm  font-medium text-white hover:bg-green-700 focus:outline-none "
                          >
                          Add Mission
                        </button>
                          <div>
                            <label>List Font - </label>
                            <select name='listFont'>
                              <option value='monospace'>mono</option>
                              <option value='serif'>serif</option>
                              <option value='sans-serif'>sans</option>
                              <option value='fantasy'>fantasy</option>
                              <option value='cursive'>cursive</option>
                              <option value='fangsong'>fangsong</option>
                            </select>
                            <br/>
                            <label>List Font Color - </label>
                            <input type="color" defaultValue='#000000'  name="listFontColor" />
                            <br/>
                            <label>List Background Color - </label>
                            <input type="color" defaultValue='#FFFFFF' name="listBackgroundColor" />
                            <br/>
                            <label>Font Size - </label>
                            <select id='fontSize' name="listFontSize">
                              <option value='1rem'>regular</option>
                              <option value='1.3rem'>xl</option>
                              <option value='1.5rem'>2xl</option>
                            </select>
                          </div>
                        <div className="grid">
                             
                          <div className="mb-6">{message}</div>
                          <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                            Add the List!
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        :<h1 className="text-center text-4xl  mt-24 text-red-500">Unfortunately only companys can publish a list:(</h1>}
            </div>
            </div>
            </div>
        
      
    
  );
};

export default AddList;
