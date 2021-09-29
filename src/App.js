import { Fragment, useEffect, useState } from "react";
import { Header } from "./components/Header";
import Map from "./components/Map";
import { GlobalStyle } from "./styles/globa";



function App() {
   const [location , setLocation] = useState({})
   const [valueSubmit , setValueSubmit ] = useState("")

   useEffect(()=>{
    
     handleInitialize()
   },[])

   async function handleInitialize(){
    await  fetch(`https://geo.ipify.org/api/v1?apiKey=at_mpLLZfdKhztZ8wyh6Ps77SJxYFDSD&ipAddress=${valueSubmit}`)
     .then(response => response.json())
     .then(data => setLocation(data))
}
 console.log(location)
  return (
   <Fragment>
     <Header location={location} setLocation={setLocation} handleInitialize={handleInitialize} 
     valueSubmit={valueSubmit} setValueSubmit={setValueSubmit}/>
     <Map location={location}/>
      <GlobalStyle/>
   </Fragment>
  );
}

export default App;
