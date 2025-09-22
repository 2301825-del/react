import React from "react";
function Car({ brand, model }) { return <h2>{brand} {model}</h2>; }
export default function PropsDestructuring() { return <Car brand="Ford" model="Mustang" />; }