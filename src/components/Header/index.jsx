import { Container } from "./style";
import BG from '../../images/pattern-bg.png'
import { useState } from "react";

export function Header({location , setLocation , valueSubmit , setValueSubmit , handleInitialize}){




    return(
        <Container BG={BG}>
            <div className='content'>
                <h1>IP Address Tracker</h1>
                <input type="text" value={valueSubmit} onChange={({target}) => setValueSubmit(target.value) } placeholder="Search any IP address or domain" /> <button onClick={handleInitialize} >ᐅ</button>
            </div>
           {
               location?.location && 
               <section  className='information mobile'>
               <div>
                   <h2> IP ADDress</h2>
                   <p>
                       {location.ip}
                   </p>
               </div>

               <div>
               <h2> LOCATION </h2>
                   <p>
                { `${location.location.city}, ${location.location.country} 
                 `}
                   </p>
               </div>

               <div>
               <h2> TIMEZONE</h2>
                   <p>
                       UTC {location.location.timezone}
                   </p>
               </div>

               <div>
               <h2> ISP </h2>
                   <p>
                       {location.as.name}
                   </p>
               </div>

           </section>
           }
        </Container>
    )
}