import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    #root{
      font-size: 60%;
    }

    #root, body, html {
      height: 100vh;
    }

    body{
      background-color: ${(props) => props.theme.colors.background};   
    }

    body, input, button, textarea {
      font: 500 1.6rem Poppins;
      color: ${(props) => props.theme.colors.text.base};
    }
    
    button {
      cursor: pointer;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
      #root {
        font-size: 62.5%;
      } 
    }
`;
