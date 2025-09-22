import React,{forwardRef,useRef} from "react";
const Input=forwardRef((props,ref)=><input ref={ref} {...props}/>);
export default function ForwardRefExample(){const ref=useRef();return<><Input ref={ref}/><button onClick={()=>ref.current.focus()}>Focus</button></>;}