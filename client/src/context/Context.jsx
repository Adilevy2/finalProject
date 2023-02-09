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
const [areYouSureDeleteTodo,setAreYouSureDeleteTodo] = useState(false);
const [areYouSureDeleteMyLists,setAreYouSureDeleteMyLists] = useState(false);
const [todoId,setTodoId] = useState('');
const [listId,setListId] = useState('');
const [listName,setListName] = useState('');
    return ( 
        <AllContext.Provider value={{areYouSureDeleteMyLists,setAreYouSureDeleteMyLists,listName,setListName,listId,setListId,editList,setEditList,addList,setAddList,editTask,setEditTask,todoId,setTodoId,areYouSureDeleteTodo,setAreYouSureDeleteTodo,support,setSupport,modalOnSignUp,setModalOnSignUp,modalOnLogin,setModalOnLogin}}>
            {children}
        </AllContext.Provider>
     );
}
 
export default AppContext;