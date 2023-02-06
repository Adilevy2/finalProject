import { createContext,useState } from "react";

export const AllContext=createContext();
const AppContext = (props) => {
const {children}=props;    
const [modalOnSignUp,setModalOnSignUp] = useState(false);
const [modalOnLogin,setModalOnLogin] = useState(false);
    return ( 
        <AllContext.Provider value={{modalOnSignUp,setModalOnSignUp,modalOnLogin,setModalOnLogin}}>
            {children}
        </AllContext.Provider>
     );
}
 
export default AppContext;