import styled from "styled-components";


export const Container = styled.header`
  background: url(${(props)=> props.BG});
  height: 15rem;
  

   div.content{
       width: 50%;
       margin: 0 auto;
       padding-top: 1rem;
       text-align:center;
       h1{
           color: white;
           font-weight: 600;
       }


       input {
           margin-top:  1rem;
             display: inline-block;
            width:  60%;
            height:  3rem;
            border-radius: 0.5rem  0 0  0.5rem ;
            border: 0;
            outline: none;
            padding-left:  1rem;
            color: var(--dark-gray);
       }

       button {
        display: inline-block;
        width: 3rem;
        height: 3.1rem;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        margin-left: -0.3rem;
        border: 0;
        background: var(--very-dark-gray);
        color: white;
         
       }
   }



   section.information{
       width: 70%;
       margin: 0 auto;
       display: flex;
       background-color: white;
       margin-top: 3rem;
       border-radius: 0.6rem  ;
       position:  relative;
       flex-direction: row;
       z-index: 1000;

      
   @media (width: 375px){
    .mobile{
        width: 80%;
        height: 70%;
        flex-direction: column ; 
        justify-content:  center;
        align-items:  center;
    }
    
        }

        
       div{
           margin-left: 0.2rem ;
           width: 15rem;
           height:  7rem;
           display: grid;
           align-items:  center;
           padding-left:  1rem;
           margin-top:  1rem;
           margin-bottom:  1rem;
               

           & + div {
              
            border-left: 1px solid black;
                
           }
             h2{
                 font-size:  1.2rem;
                 color: var(--dark-gray);
             }

             p{
                 margin-top:  -1rem;
                 font-size: 1.5rem;
                 font-weight:  600;
             }

       }
  }

`