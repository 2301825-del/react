import React,{useState} from "react";
import { CSSTransition } from "react-transition-group";
import "./fade.css";
export default function TransitionExample(){const[show,setShow]=useState(false);return<><button onClick={()=>setShow(!show)}>Toggle</button><CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit><div>I fade</div></CSSTransition></>;}