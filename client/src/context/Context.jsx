import { createContext,useState } from "react";

export const AllContext=createContext();
const AppContext = (props) => {
const {children}=props;    
const [modalOnSignUp,setModalOnSignUp] = useState(false);
const [modalOnLogin,setModalOnLogin] = useState(false);
const [support,setSupport] = useState(false);
const [editTask,setEditTask] = useState(false);
const [addList,setAddList] = useState(false);
const [editList,setEditList] = useState(false);
const [listAdded,setListAdded] = useState(false);
const [qrGenerate,setQrGenerate] = useState(false);
const [needToLogin,setNeedToLogin] = useState(false);
const [changePassword,setChangePassword] = useState(false);
const [changePhoneNumber,setChangePhoneNumber] = useState(false);
const [changeAdress,setChangeAdress] = useState(false);
const [listAllreadyAdded,setListAllreadyAdded] = useState(false);
const [companyLists,setCompanyLists] = useState(false);
const [areYouSureDeleteTodo,setAreYouSureDeleteTodo] = useState(false);
const [areYouSureDeleteMyLists,setAreYouSureDeleteMyLists] = useState(false);
const [todoId,setTodoId] = useState('');
const [companyEmail,setCompanyEmail] = useState('');
const [listId,setListId] = useState('');
const [listName,setListName] = useState('');
const [url,setUrl] = useState('');
    return ( 
        <AllContext.Provider value={{changeAdress,setChangeAdress,changePhoneNumber,setChangePhoneNumber,changePassword,setChangePassword,companyLists,setCompanyLists,companyEmail,setCompanyEmail,needToLogin,setNeedToLogin,qrGenerate,setQrGenerate,url,setUrl,listAllreadyAdded,setListAllreadyAdded,listAdded,setListAdded,areYouSureDeleteMyLists,setAreYouSureDeleteMyLists,listName,setListName,listId,setListId,editList,setEditList,addList,setAddList,editTask,setEditTask,todoId,setTodoId,areYouSureDeleteTodo,setAreYouSureDeleteTodo,support,setSupport,modalOnSignUp,setModalOnSignUp,modalOnLogin,setModalOnLogin}}>
            {children}
        </AllContext.Provider>
     );
}
 
export default AppContext;