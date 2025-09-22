import React from "react";
function Car(props) { return <h2>I am a {props.brand}!</h2>; }
export default function ComponentsExample() { return <Car brand="Ford" />; }