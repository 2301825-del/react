import React from "react";
import ReactDOM from "react-dom";
export default function PortalExample() { return ReactDOM.createPortal(<p>I am rendered in portal!</p>, document.body); }