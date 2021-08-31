import React,{useContext}  from "react";

const AuthContext = React.createContext({
    items:[],
    onLogin: (email,pass)=>{},
    onLogout: ()=>{}
})

export function AuthContextProvider(props) {
    
    const items =[]
    

    const onLoginHandler=(email,pass)=>{

    }
    const onLogoutHandler=()=>{
        
    }
    return(
        <AuthContext.Provider value = {{
            items:items, onLogin:onLoginHandler, onLogout:onLogoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext