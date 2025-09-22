import React, { Suspense } from "react";
const LazyComp = React.lazy(()=>import("./01_Home"));
export default function SuspenseExample() { return <Suspense fallback={<div>Loading...</div>}><LazyComp/></Suspense>; }