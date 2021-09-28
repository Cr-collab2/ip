import styled from "styled-components";
// npm i react-leaflet@3.1.0 @react-leaflet/core@1.0.2
// import 'leaflet/dist/leaflet.css'

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

`