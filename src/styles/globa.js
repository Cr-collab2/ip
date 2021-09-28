import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:  0;
        box-sizing: border-box;
    }


    :root{
        --very-dark-gray : hsl(0, 0%, 17%);
        --dark-gray: hsl(0, 0%, 59%);
    }

    html{
        @media (max-width: 1200px){
            font-size: 100%;
        }

        @media (max-width: 960px ){
            font-size: 93.75% ;
        }  

        @media (max-width: 768px ){
              font-size: 87.75%;
        }

        @media (max-width:480 ){
            font-size: 86,75%;
        }

        @media (max-width:320 ){
            font-size: 81,75%;
        }


    }


body , textarea , input , button {
    font-family: 'Rubik' , sans-serif;
    font-weight: 400;
}

button{
    cursor: pointer;
}


a{
    text-decoration: none;
}




`