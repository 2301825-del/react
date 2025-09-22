import React,{useRef} from "react";
export default function UseRefExample(){const inputRef=useRef();return<><input ref={inputRef}/><button onClick={()=>inputRef.current.focus()}>Focus</button></>;}