import React,{createContext,useContext} from "react";
const UserContext=createContext("Guest");
export default function UseContextExample(){return<UserContext.Provider value="John"><Child/></UserContext.Provider>}
function Child(){const user=useContext(UserContext);return<h2>Hello {user}</h2>;}