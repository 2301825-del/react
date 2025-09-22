import React, { useState } from "react";
export default function FormExample() { const [name,setName]=useState(""); return <form><input value={name} onChange={e=>setName(e.target.value)} /></form>; }