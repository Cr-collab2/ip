import styled  from "styled-components";



export const Container = styled.div`

  section.information{
       width: 70%;
       margin: 0 auto;
       display: flex;


        
       div{
           margin-top: -3rem;
           margin-left: 0.2rem ;
           border: 1px solid red;
           width: 15rem;
           height:  7rem;
           background-color: white;
           border-radius: 0.6rem  ;
           display: grid;
           align-items:  center;
           padding-left:  1rem;

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