import React from "react";
function Car({ brand }) { return <h2>I am a {brand}!</h2>; }
export default function PropsExample() { return <Car brand="Toyota" />; }