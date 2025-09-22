import React from "react";
import useFetch from "./useFetch";
export default function CustomHookExample(){const[data]=useFetch("https://jsonplaceholder.typicode.com/todos");return<>{data && data.slice(0,5).map(d=><p key={d.id}>{d.title}</p>)}</>;}