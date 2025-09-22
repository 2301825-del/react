import React from "react";
export default function ListExample() { const cars = ["BMW","Audi","Ford"]; return <ul>{cars.map((c,i)=><li key={i}>{c}</li>)}</ul>; }