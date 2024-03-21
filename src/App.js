import React from "react";
import { lazy, Suspense } from "react";
import Navbar from "./component/Navbar";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
// import Herosection from "./component/Herosection";
 const Herosection= lazy(()=>import ("./component/Herosection"))




 let online = navigator.online;
 window.addEventListener('online', (e) => {
  console.log('offline');
});




// const Herosection = 
function App() {
  return (
<> 
<Suspense fallback={<div className="text-3xl">The content is loaading</div>}>
  <Navbar/>
 
  <Herosection/>
  </Suspense>
  <Suspense>
  <Section1/>
  <Section2/>
  <Section3/>
  </Suspense>
 
 
</>
  );
}

export default App;

