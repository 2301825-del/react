import React from "react";
function withGreeting(Wrapped){return function(){return<><Wrapped/><p>Hello from HOC</p></>}};
function Basic(){return<h2>Basic Component</h2>;}
export default withGreeting(Basic);