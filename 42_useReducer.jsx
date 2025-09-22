import React,{useReducer} from "react";
function reducer(state,action){switch(action.type){case"inc":return{count:state.count+1};default:return state;}}
export default function UseReducerExample(){const[state,dispatch]=useReducer(reducer,{count:0});return<><p>{state.count}</p><button onClick={()=>dispatch({type:"inc"})}>+</button></>;}