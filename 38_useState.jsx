import React,{useState} from "react";
export default function UseStateExample(){const[count,setCount]=useState(0);return<><p>{count}</p><button onClick={()=>setCount(count+1)}>+</button></>;}