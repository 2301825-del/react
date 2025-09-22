import React from "react";
function Layout({ children }) { return <div className="box">{children}</div>; }
export default function PropsChildren() { return <Layout><p>Hello inside!</p></Layout>; }