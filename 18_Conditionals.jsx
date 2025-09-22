import React from "react";
export default function ConditionalExample() { const loggedIn = true; return <h2>{loggedIn ? "Welcome" : "Please log in"}</h2>; }