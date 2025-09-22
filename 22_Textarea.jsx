import React, { useState } from "react";
export default function TextareaExample() { const [txt,setTxt]=useState(""); return <textarea value={txt} onChange={e=>setTxt(e.target.value)} />; }